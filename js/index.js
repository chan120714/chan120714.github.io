import nodePositions from './nodePositions.js';
import graph from './graph.js';
import JapaneseKeys from './JapaneseKeys.js';
import EnglishKeys from './EnglishKeys.js';
import drawPath from './drawPath.js';

let lang = 0;
let selectionCallback;

const nodes = Object.keys(graph);

const textContent = {
    0: {
        title: "광주고 네비게이션",
        findDestination: "목적지 찾기",
        findRestroom: "화장실 찾기",
        resetLanguage: "언어 재설정",
        selectLocation: "선택",
        promptStart: "출발지를 선택하세요",
        promptEnd: "도착지를 선택하세요",
        MovePageButton:"HTML 설명 보러가기"
    },
    1: {
        title: "Gwangju HighSchool Navigation",
        findDestination: "Find Destination",
        findRestroom: "Find Restroom",
        resetLanguage: "Change Language",
        selectLocation: "Select",
        promptStart: "Select Starting Point",
        promptEnd: "Select Destination",
        MovePageButton:"Go to HTML Description"
    },
    2: {
        title: "光州高校のナビゲーション",
        findDestination: "目的地探し",
        findRestroom: "トイレ探し",
        resetLanguage: "言語変更",
        selectLocation: "選択",
        promptStart: "出発地を選択してください",
        promptEnd: "到着地を選択してください",
        MovePageButton:"HTML説明を見に行く"
    }
};

const updateTextContent = () => {
    document.getElementById('title').textContent = textContent[lang].title;
    document.getElementById('find-destination-button').textContent = textContent[lang].findDestination;
    document.getElementById('find-restroom-button').textContent = textContent[lang].findRestroom;
    document.getElementById('reset-language-button').textContent = textContent[lang].resetLanguage;
    document.getElementById('select-location-button').textContent = textContent[lang].selectLocation;
}

const sortGraphValues = (graph) => {
    for (let node in graph) {
        const sortedKeys = Object.keys(graph[node]).sort();
        const sortedObject = {};
        sortedKeys.forEach(key => {
            sortedObject[key] = graph[node][key];
        });
        graph[node] = sortedObject;
    }
};
sortGraphValues(graph);

const 목적지 = (start, end) => {
    const q = [];
    const visited = {};
    const path = [];
    nodes.forEach(node => visited[node] = Infinity);
    visited[start] = 0;
    q.push([0, start]);
    while (q.length > 0) {
        const [dist, node] = q.shift();
        if (dist > visited[node]) continue;
        for (const neighbor in graph[node]) {
            const newDist = dist + graph[node][neighbor];
            if (newDist < visited[neighbor]) {
                visited[neighbor] = newDist;
                q.push([newDist, neighbor]);
            }
        }
    }
    let cur = end;
    path.push(cur);
    while (cur !== start) {
        for (const neighbor in graph[cur]) {
            if (visited[cur] - visited[neighbor] === graph[cur][neighbor]) {
                path.push(neighbor);
                cur = neighbor;
                break;
            }
        }
    }
    return path.reverse();
};

const 화장실 = (start) => {
    const visited = {};
    const q = [];
    nodes.forEach(node => visited[node] = Infinity);
    visited[start] = 0;
    q.push([0, start]);
    while (q.length > 0) {
        const [dist, node] = q.shift();
        if (dist > visited[node]) continue;
        for (const neighbor in graph[node]) {
            const newDist = dist + graph[node][neighbor];
            if (newDist < visited[neighbor]) {
                visited[neighbor] = newDist;
                q.push([newDist, neighbor]);
            }
        }
    };
    let cur = '진로관 2층 화장실';
    nodes.forEach(node => {
        if (node.includes('화장실') && visited[node] < visited[cur]) {
            cur = node;
        }
    });
    const path = [];
    path.push(cur);
    while (cur !== start) {
        for (const neighbor in graph[cur]) {
            if (visited[cur] - visited[neighbor] === graph[cur][neighbor]) {
                path.push(neighbor);
                cur = neighbor;
                break;
            }
        }
    }
    return path.reverse();
};

const 위치설정 = (promptType, callback) => {
    const locationSelection = document.getElementById('location-selection');
    const locationPrompt = document.getElementById('location-prompt');
    const locationList = document.getElementById('location-list');
    locationPrompt.textContent = promptType === 'start' ? textContent[lang].promptStart : textContent[lang].promptEnd;
    locationList.innerHTML = '';

    nodes.forEach((node, index) => {
        const option = document.createElement('option');
        option.value = node;
        option.textContent = lang == 0 ? node : lang == 1 ? EnglishKeys[node] : JapaneseKeys[node];
        locationList.appendChild(option);
    });

    selectionCallback = callback;
    document.getElementById('main-menu').classList.add('hidden');
    locationSelection.classList.remove('hidden');
};

const selectLocation = () => {
    const selectedLocation = document.getElementById('location-list').value;
    document.getElementById('location-selection').classList.add('hidden');
    selectionCallback(selectedLocation);
};

const setLanguage = () => {
    lang = document.getElementById('language').value;
    updateTextContent();
    document.getElementById('language-selection').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
};

const resetLanguage = () => {
    document.getElementById('language-selection').classList.remove('hidden');
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('output').textContent = '';
};


const findDestination = () => {
    let start, end;

    위치설정('start', (selectedStart) => {
        start = selectedStart;
        위치설정('end', (selectedEnd) => {
            end = selectedEnd;
            const path = 목적지(start, end);
            let output = '';
            let k = 1;
            path.forEach(step => {
                if (lang == 0) {
                    output += k + '. ' + step + '\n';
                } else if (lang == 1) {
                    output += k + '. ' + EnglishKeys[step] + '\n';
                } else {
                    output += k + '. ' + JapaneseKeys[step] + '\n';
                }
                k += 1;
            });
            drawPath(path);
            document.getElementById('output').textContent = output;
            document.getElementById('main-menu').classList.remove('hidden');
        });
    });
};

const findRestroom = () => {
    위치설정('start', (start) => {
        const path = 화장실(start);
        let output = '';
        let k = 1;
        path.forEach(step => {
            if (lang == 0) {
                output += k + '. ' + step + '\n';
            } else if (lang == 1) {
                output += k + '. ' + EnglishKeys[step] + '\n';
            } else {
                output += k + '. ' + JapaneseKeys[step] + '\n';
            }
            k += 1;
        });
        drawPath(path);
        document.getElementById('output').textContent = output;
        document.getElementById('main-menu').classList.remove('hidden');
    });
};


// 모든 함수들을 전역 스코프에 할당
window.setLanguage = setLanguage;
window.selectLocation = selectLocation;
window.findDestination = findDestination;
window.findRestroom = findRestroom;
window.resetLanguage = resetLanguage;
