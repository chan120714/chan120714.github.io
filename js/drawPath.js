import nodePositions from "./nodePositions.js";

const drawPath = (path) => {
    const canvas = document.getElementById('mapCanvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스를 초기화

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;

    ctx.beginPath();
    // 시작점을 경로의 첫 번째 노드로 설정
    ctx.moveTo(nodePositions[path[0]].x, nodePositions[path[0]].y);
    // 경로의 각 노드를 선으로 연결
    for (let i = 1; i < path.length; i++) {
        if (path[i].includes("계단") && (path[i].includes("창학관") || path[i].includes("진로관"))){
            ctx.moveTo(nodePositions[path[i]].x, nodePositions[path[i]].y);
        }
        else{
            ctx.lineTo(nodePositions[path[i]].x, nodePositions[path[i]].y);
        }
        let MAXxposition = nodePositions[path[i-1]].x-nodePositions[path[i]].x;
        let MAXyposition = nodePositions[path[i-1]].y-nodePositions[path[i]].y;
        if (MAXxposition**2+MAXyposition**2<100){
            continue;
        }
        MAXxposition=MAXxposition*50;
        MAXyposition*=50;
        let MINxposition=0;
        let MINyposition=0;
        let targetx=MAXxposition/2;
        let targety=MAXyposition/2;
        while (Math.abs(targetx**2+targety**2-100)>=0.1){
            if (targetx**2+targety**2>=100){
                MAXxposition=targetx;
                MAXyposition=targety;
            }
            else{
                MINxposition=targetx;
                MINyposition=targety;
            }
            targetx=(MINxposition+MAXxposition)/2;
            targety=(MINyposition+MAXyposition)/2;

        }
        let tx=0.707*targetx-0.707*targety;
        let ty=0.707*targetx+0.707*targety;
        ctx.lineTo(nodePositions[path[i]].x+tx, nodePositions[path[i]].y+ty);
        ctx.lineTo(nodePositions[path[i]].x, nodePositions[path[i]].y);
        let ttx=0.707*targetx+0.707*targety;
        let tty=-0.707*targetx+0.707*targety;
        ctx.lineTo(nodePositions[path[i]].x+ttx, nodePositions[path[i]].y+tty);
        ctx.lineTo(nodePositions[path[i]].x, nodePositions[path[i]].y);
        
    }
    ctx.stroke();
};

export default drawPath;