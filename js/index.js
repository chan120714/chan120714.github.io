
    const graph = {
    '진로관 1층 계단':{'진로관 2층 계단':18000,'진로관 1층 중앙':5000},
    '진로관 1층 중앙':{'시청각실':10000,'교과교실2':13500,'진로관 1층 화장실':8000,'진로관 1층 계단':5000},
    '1층통로':{'교과교실1':23000,'2층통로':18000,'과학교실3':4500,'창학관 - 세종관 이음길':10000},
    '시청각실':{'진로관 1층 중앙':10000},
    '교과교실2':{'진로관 1층 중앙':13500,'교과교실1':9000},
    '교과교실1':{'1층통로':23000,'교과교실2':9000},
    '진로관 1층 화장실':{'진로관 1층 중앙':8000},
    '진로관 2층 중앙':{'진로관 2층 화장실':8000,'진로관 2층 계단':5000,'3학년 교무실':9000,'3-2':9000},
    '진로관 2층 계단':{'진로관 2층 중앙':5000,'진로관 1층 계단':18000,'진로관 3층 계단':18000},
    '진로관 2층 화장실':{'진로관 2층 중앙':8000},
    '3-2':{'3-3':9000,'진로관 2층 중앙':9000},
    '3-3':{'3-2':9000},
    '3-1':{'3학년 교무실':9000,'2층통로':40500},
    '3학년 교무실':{'진로관 2층 중앙':9000,'3-1':9000},
    '2층통로':{'1층통로':18000,'3-1':40500, '3층통로':18000,'창의융합실':12500},
    '진로관 3층 계단':{'진로관 3층 중앙':5000,'진로관 2층 계단':18000},
    '진로관 3층 중앙':{'진로관 3층 화장실':8000,'진로관 3층 계단':5000,'3-7':13500,'3-6':13500},
    '진로관 3층 화장실':{'진로관 3층 중앙':8000},
    '3-7':{'진로관 3층 중앙':13500,'3-8':9000},
    '3-8':{'3-7':9000},
    '3-6':{'진로관 3층 중앙':13500,'3-5':9000},
    '3-5':{'3-6':9000,'3-4':9000},
    '3-4':{'교과교실3':9000,'3-5':9000},
    '교과교실3':{'3-4':9000,'3층통로':22500},
    '3층통로':{'교과교실3':22500,'2층통로':18000,'프로파일실':9000},
    
    '과학교실3':{'1층통로':4500,'공동교육과정 온라인교실':9000,'생물실':9000},
    '공동교육과정 온라인교실':{'과학교실3':9000,'창학관 1층 중앙':10000,'생물실':9000},
    '창학관 1층 중앙':{'창학관 1층 현관':5000,'공동교육과정 온라인교실':10000,'다락':9000,'창학관 1층 화장실':18000,'통로':14000,'창학관 1층 계단':2500},
    '창학관 1층 화장실':{'창학관 1층 중앙':18000},
    '다락':{'창학관 1층 중앙':9000},
    '창학관 1층 계단':{'창학관 1층 중앙':2500,'창학관 2층 계단':15000},
    '창학관 1층 현관':{'본관 2층 중앙':50000,'창학관 1층 중앙':5000},
    '생물실':{'공동교육과정 온라인교실':9000,'과학교실3':9000},

    '창학관 2층 계단':{'창학관 1층 계단':15000,'창학관 2층 중앙':2500,'창학관 3층 계단':15000},
    '창학관 2층 중앙':{'융합교육부':15000,'창학관 2층 화장실':7500,'컴퓨터실':9000,'과학 동아리실':2500,'지구과학실':9000,'창의융합실':6000,'창학관 2층 계단':2500},
    '창의융합실':{'창학관 2층 중앙':6000,'2층통로':12500,'지구과학실':4000},
    '지구과학실':{'창학관 2층 중앙':9000,'창의융합실':4000},
    '창학관 2층 화장실':{'창학관 2층 중앙':7500},
    '컴퓨터실':{'창학관 2층 중앙':9000},
    '과학 동아리실':{'창학관 2층 중앙':2500},
    '융합교육부':{'창학관 2층 중앙':15000},

    '창학관 3층 계단':{'창학관 2층 계단':15000,'창학관 3층 중앙':4000},
    '창학관 3층 중앙':{'창학관 3층 화장실':7500,'창학관 3층 계단':4000,'연구실':15000,'멀티미디어실':6500,'Wee class':2500},
    '창학관 3층 화장실':{'창학관 3층 중앙':7500,'연구실':5000},
    '연구실':{'창학관 3층 화장실':5000},
    '멀티미디어실':{'창학관 3층 중앙':6500},
    '화학실':{'창학관 3층 중앙':9000},
    'Wee class':{'창학관 3층 중앙':2500,'화학실':9500},
    '화학실':{'Wee class':9500,'프로파일실':2500},
    '프로파일실':{'화학실':2500,'3층통로':9000},
    
    '통로':{'창학관 1층 중앙':14000,'본관 2층 우측 계단':27000,'세종관 입구':15000},
    
    '본관 2층 우측 계단':{'통로':27000,'본관 2층 우측 화장실':4000,'보건실':8500,'본관 3층 우측 계단':15000},
    '본관 2층 우측 화장실':{'본관 2층 우측 계단':4000},
    '보건실':{'본관 2층 우측 계단':8500,'교육정보실':9000},
    '교육정보실':{'보건실':9000,'학생생활안전교육부':9000},
    '학생생활안전교육부':{'교육정보실':9000,'본관 2층 중앙':9000},
    '본관 2층 중앙':{'급식실':50000,'창학관 1층 현관':50000,'학생생활안전교육부':9000,'본관 2층 중앙 계단':9000,'후관 입구':15000},
    '본관 2층 중앙 계단':{'본관 2층 중앙':9000,'본관 3층 중앙 계단':15000,'방송실':4500,'본관 1층 우측 계단':15000},
    '방송실':{'본관 2층 중앙 계단':4500,'교무실':13500},
    '교무실':{'방송실':13500,'2층 원형 계단':2500,'교장실':13500},
    '2층 원형 계단':{'교무실':2500,'1층 원형 계단':15000},
    '교장실':{'교무실':13500,'창의인재부':9000},
    '창의인재부':{'교장실':9000,'본관 2층 좌측 계단':6500},
    '본관 2층 좌측 화장실':{'본관 2층 좌측 계단':2500},
    '본관 2층 좌측 계단':{'본관 2층 좌측 화장실':2500,'본관 1층 좌측 계단':15000,'본관 3층 좌측 계단':15000,'창의인재부':6500},
    
    '본관 1층 우측 계단':{'본관 2층 중앙 계단':15000,'발간실':4500,'보일러실':4500},
    '보일러실':{'본관 1층 우측 계단':4500},
    '발간실':{'본관 1층 우측 계단':4500,'행정실':9000},
    '행정실':{'발간실':9000,'본관 1층 중앙':4500},
    '본관 1층 중앙':{'행정실':4500,'1층 원형 계단':2500,'문서고':7000},
    '1층 원형 계단':{'본관 1층 중앙':2500,'2층 원형 계단':15000},
    '문서고':{'본관 1층 중앙':7000,'학습도움실2':6500},
    '학습도움실2':{'문서고':6500,'학습도움실1':9000},
    '학습도움실1':{'학습도움실2':9000,'본관 1층 좌측 계단':6500},
    '본관 1층 화장실':{'본관 1층 좌측 계단':2500},
    '본관 1층 좌측 계단':{'급식실':40000,'체육관 입구':45000,'본관 1층 화장실':2500,'본관 2층 좌측 계단':15000,'학습도움실1':6500,'경비실':1},
    
    '본관 3층 우측 계단':{'본관 2층 우측 계단':15000,'본관 4층 우측 계단':15000,'본관 3층 우측 화장실':2000,'1-8':8500},
    '본관 3층 우측 화장실':{'본관 3층 우측 계단':2000},
    '1-8':{'본관 3층 우측 계단':8500,'1-7':9000},
    '1-7':{'1-8':9000,'1-6':9000},
    '1-6':{'1-7':9000,'3층 홈베이스':2500,'1-5':9000},
    '1-5':{'1-6':9000,'본관 3층 중앙 계단':9000},
    '3층 홈베이스':{'1-6':2500,'후관 2층 계단':15000,'후관 3층 좌측 계단':15000},
    '본관 3층 중앙 계단':{'본관 2층 중앙 계단':15000,'본관 4층 중앙 계단':15000,'1학년 교무실':4500,'1-5':9000},
    '1학년 교무실':{'본관 3층 중앙 계단':4500,'1-4':9000},
    '1-4':{'1학년 교무실':9000,'1-3':9000},
    '1-3':{'1-4':9000,'1-2':9000},
    '1-2':{'1-3':9000,'1-1':9000},
    '1-1':{'1-2':9000,'본관 3층 좌측 계단':6500},
    '본관 3층 좌측 계단':{'본관 3층 좌측 화장실':2500,'본관 2층 좌측 계단':15000,'본관 4층 좌측 계단':15000,'1-1':6500},
    '본관 3층 좌측 화장실':{'본관 3층 좌측 계단':2500},
    
    '본관 4층 우측 계단':{'본관 3층 우측 계단':15000,'본관 4층 우측 화장실':2000,'2-8':8500},
    '본관 4층 우측 화장실':{'본관 4층 우측 계단':2000},
    '2-8':{'본관 4층 우측 계단':8500,'2-7':9000},
    '2-7':{'2-8':9000,'2-6':9000},
    '2-6':{'2-7':9000,'4층 홈베이스':2500,'2-5':9000},
    '2-5':{'2-6':9000,'본관 4층 중앙 계단':9000},
    '4층 홈베이스':{'2-6':2500,'후관 3층 좌측 계단':15000,'후관 4층 좌측 계단':15000},
    '본관 4층 중앙 계단':{'본관 3층 중앙 계단':15000,'2학년 교무실':4500,'2-5':9000},
    '2학년 교무실':{'본관 4층 중앙 계단':4500,'2-4':9000},
    '2-4':{'2학년 교무실':9000,'2-3':9000},
    '2-3':{'2-4':9000,'2-2':9000},
    '2-2':{'2-3':9000,'2-1':9000},
    '2-1':{'2-2':9000,'본관 4층 좌측 계단':6500},
    '본관 4층 좌측 계단':{'본관 4층 좌측 화장실':2500,'본관 3층 좌측 계단':15000,'2-1':6500},
    '본관 4층 좌측 화장실':{'본관 4층 좌측 계단':2500},
    
    '후관 입구':{'본관 2층 중앙':15000,'후관 2층 계단':7500,'미술실':10000},
    '후관 2층 계단':{'후관 입구':7500,'3층 홈베이스':15000,'후관 3층 좌측 계단':7500},
    '미술실':{'후관 입구':10000},
    '후관 3층 좌측 계단':{'3층 홈베이스':15000,'후관 2층 계단':7500,'방통고협의실':2250,'후관 4층 좌측 계단':15000,'4층 홈베이스':15000},
    '방통고협의실':{'후관 3층 좌측 계단':2250,'방송통신고 교무실':4500},
    '방송통신고 교무실':{'방통고협의실':4500,'영어교실':9000},
    '영어교실':{'방송통신고 교무실':9000,'국어교실':9000},
    '국어교실':{'영어교실':9000,'후관 3층 우측계단':6500},
    '후관 3층 화장실':{'후관 3층 우측계단':2500},
    '후관 3층 우측계단':{'국어교실':6500,'후관 3층 화장실':2500,'후관 4층 우측 계단':10000},
    '후관 4층 좌측 계단':{'4층 홈베이스':15000,'후관 3층 좌측 계단':15000,'사회교실1':4500},
    '사회교실1':{'후관 4층 좌측 계단':4500,'수학교실1':9000},
    '수학교실1':{'사회교실1':9000,'수학교실2':9000},
    '수학교실2':{'수학교실1':9000,'후관 4층 우측 계단':6500},
    '후관 4층 화장실':{'후관 4층 우측 계단':2500},
    '후관 4층 우측 계단':{'수학교실2':6500,'후관 3층 우측계단':10000,'후관 4층 화장실':2500},
    '세종관 입구':{'계림동산':20000,'통로':15000,'매점':10000,'세종관 1층 중앙':6200},
    '세종관 1층 중앙':{'세종관 입구':6200,'진로진학상담부':3600,'세종관 1층 화장실':4250,'세종관 1층 계단':3000,'인문사회부':6200,'도서관':3600},
    '진로진학상담부':{'세종관 1층 중앙':3600},
    '세종관 1층 화장실':{'세종관 1층 중앙':4250},
    '인문사회부':{'세종관 1층 중앙':6200},
    '도서관':{'세종관 1층 중앙':3600},
    '세종관 1층 계단':{'세종관 1층 중앙':3000,'세종관 2층 계단':12000},
    '세종관 2층 계단':{'세종관 1층 계단':12000,'2학년 야자실':3000,'세종관 3층 계단':12000},
    '2학년 야자실':{'세종관 2층 계단':3000},
    '세종관 3층 계단':{'세종관 2층 계단':12000,'1학년 야자실':3000},
    '1학년 야자실':{'세종관 3층 계단':3000},
    '매점':{'세종관 입구':10000,'창학관 - 세종관 이음길':10000},
    '경비실':{'본관 1층 좌측 계단':1},
    '창학관 - 세종관 이음길' : {'매점': 10000,'1층통로':10000},
    '계림동산':{'세종관 입구':20000},
    '급식실':{'체육관 입구':50000,'음악당':5000,"본관 2층 중앙":50000,'본관 1층 좌측 계단':40000},
    '음악당':{'급식실':5000,'음악당 화장실':5000},
    '음악당 화장실':{'음악당':5000},
    '체육관 입구':{'체육관':5000,'급식실':50000,'본관 1층 좌측 계단':45000},
    '체육관':{'체육관 입구':5000}
    };

    const EnglishKeys = {
        '진로관 1층 계단': 'The stairs on the 1st floor of the Jinro building',
        '진로관 1층 중앙': 'The center of the 1st floor of Jinro Building',
        '1층통로': 'a first-floor passageway',
        '시청각실': 'AV room',
        '교과교실2': 'Curriculum Classroom 2',
        '교과교실1': 'Curriculum Classroom 1',
        '진로관 1층 화장실': 'restroom on the 1st floor of Jinro Building',
        '진로관 2층 중앙': 'The center of the 2nd floor of Jinro Building',
        '진로관 2층 계단': 'The stairs on the 2nd floor of the Jinro building',
        '진로관 2층 화장실': 'restroom on the 2nd floor of Jinro Building',
        '3-2': '3-2',
        '3-3': '3-3',
        '3-1': '3-1',
        '3학년 교무실': "Teachers' Office for 3rd Graders",
        '2층통로': 'a two-story passageway',
        '진로관 3층 계단': 'The stairs on the 3rd floor of the Jinro building',
        '진로관 3층 중앙': 'The center of the 3rd floor of Jinro Building',
        '진로관 3층 화장실': 'restroom on the 3rd floor of Jinro Building',
        '3-7': '3-7',
        '3-8': '3-8',
        '3-6': '3-6',
        '3-5': '3-5',
        '3-4': '3-4',
        '교과교실3': 'Curriculum Classroom 3',
        '3층통로': 'a third-floor passageway',
        '과학교실3': 'a science Classroom 3',
        '공동교육과정 온라인교실': 'an online classroom in a joint curriculum',
        '창학관 1층 중앙': 'The center of the 1st floor of Changhak building',
        '창학관 1층 화장실': 'The restroom on the 1st floor of Changhak building',
        '다락': 'Darak',
        '창학관 1층 계단': 'The stairs on the 1st floor of the Changhak building',
        '창학관 1층 현관': 'The entrance to the 1st floor of Changhak Building',
        '생물실': 'a living room',
        
        '창학관 2층 계단': 'The stairs on the 2nd floor of the Changhak building',
        '창학관 2층 중앙': 'The center of the 2nd floor of Changhak building',
        '창의융합실': 'a creative fusion room',
        '지구과학실': 'Earth Science room',
        '창학관 2층 화장실': 'The restroom on the 2nd floor of Changhak building',
        '컴퓨터실': 'Computer Lab',
        '과학 동아리실': 'Science club room',
        '융합교육부': 'Ministry of Convergence Education',
        
        '창학관 3층 계단': 'The stairs on the 3rd floor of the Changhak building',
        '창학관 3층 중앙': 'The center of the 3rd floor of Changhak building',
        '창학관 3층 화장실': 'The restroom on the 3rd floor of Changhak building',
        '연구실': 'a laboratory',
        '멀티미디어실': 'Multimedia room',
        '화학실': 'a chemistry room',
        'Wee class': 'Wee class',
        '프로파일실': 'Profile room',
        
        '통로': 'passageway',
        
        '본관 2층 우측 계단': 'the stairs to the right on the 2nd floor of the main building',
        '본관 2층 우측 화장실': 'the restroom on the right side of the 2nd floor of the main building',
        '보건실': 'Health Room',
        '교육정보실': 'Education Information Office',
        '학생생활안전교육부': 'Ministry of Student Life Safety and Education',
        '본관 2층 중앙':'the center on the 2nd floor of the main building',
        '본관 2층 중앙 계단': 'the center stairs on the 2nd floor of the main building',
        '방송실': 'Broadcasting room',
        '교무실': "Teachers' Office",
        '2층 원형 계단': 'The circular staircase on the 2nd floor',
        '교장실': "principal's Office",
        '창의인재부': 'the Ministry of Creative Resources',
        '본관 2층 좌측 화장실': 'the restroom on the left side of the 2nd floor of the main building',
        '본관 2층 좌측 계단': 'the stairs to the left on the 2nd floor of the main building',
        
        '본관 1층 우측 계단': 'the stairs to the right on the 1st floor of the main building',
        '보일러실': 'a boiler room',
        '발간실': 'a publishing room',
        '행정실': 'administrative office',
        '본관 1층 중앙': 'The center of the 1st floor of the main building',
        '1층 원형 계단': 'The circular staircase on the 1st floor',
        '문서고': 'an archive',
        '학습도움실2': 'Learning Help Room 2',
        '학습도움실1': 'Learning Help Room 1',
        '본관 1층 화장실': 'the restroom of the 1st floor of the main building',
        '본관 1층 좌측 계단': 'the stairs to the left on the 1st floor of the main building',
        
        '본관 3층 우측 계단': 'the stairs to the right on the 3rd floor of the main building',
        '본관 3층 우측 화장실': 'the restroom on the right side of the 3rd floor of the main building',
        '1-8': '1-8',
        '1-7': '1-7',
        '1-6': '1-6',
        '1-5': '1-5',
        '3층 홈베이스': 'the home base on the 3rd floor',
        '본관 3층 중앙 계단': 'the center stairs on the 3rd floor of the main building',
        '1학년 교무실': "Teachers' Office for 1st Graders",
        '1-4': '1-4',
        '1-3': '1-3',
        '1-2': '1-2',
        '1-1': '1-1',
        '본관 3층 좌측 계단': 'the stairs to the left on the 3rd floor of the main building',
        '본관 3층 좌측 화장실': 'the restroom on the left side of the 3rd floor of the main building',
        
        '본관 4층 우측 계단': 'the stairs to the right on the 4th floor of the main building',
        '본관 4층 우측 화장실': 'the restroom on the right side of the 4th floor of the main building',
        '2-8': '2-8',
        '2-7': '2-7',
        '2-6': '2-6',
        '2-5': '2-5',
        '4층 홈베이스': 'the home base on the 4th floor',
        '본관 4층 중앙 계단': 'the center stairs on the 4th floor of the main building',
        '2학년 교무실': "Teachers' Office for 2nd Graders",
        '2-4': '2-4',
        '2-3': '2-3',
        '2-2': '2-2',
        '2-1': '2-1',
        '본관 4층 좌측 계단': 'the stairs to the left on the 4th floor of the main building',
        '본관 4층 좌측 화장실': 'the restroom on the left side of the 4th floor of the main building',
        '후관 입구':'the entrance to the rear building',
        '후관 2층 계단':'the 2nd floor of the rear building',
        '미술실':'art room',
        '후관 3층 좌측 계단':'the left staircase on the 3rd floor of the rear building',
        '방통고협의실':'Open Secondary Schools a consultation room',
        '방송통신고 교무실':"Open Secondary Schools Teachers' Office",
        '영어교실':'English room',
        '국어교실':'Korean room',
        '후관 3층 화장실':'a restroom on the 3rd floor of the rear building',
        '후관 3층 우측계단':'the right staircase on the 3rd floor of the rear building',
        '후관 4층 좌측 계단':'the left staircase on the 4th floor of the rear building',
        '사회교실1':'social room 1',
        '수학교실1':'math room 1',
        '수학교실2':'math room 2',
        '후관 4층 화장실':'a restroom on the 4th floor of the rear building',
        '후관 4층 우측 계단':'the right staircase on the 4th floor of the rear building',
        '세종관 입구':'Entrance of Sejong Building',
        '세종관 1층 중앙':'The center of the 1st floor of Sejong Building',
        '진로진학상담부':'Career counseling department',
        '세종관 1층 화장실':'1st floor restroom of Sejong Building',
        '인문사회부':'Department of Humanities and Social Affairs',
        '도서관':'Library of Ruina',
        '세종관 1층 계단':'1st floor stairs of Sejong Building',
        '세종관 2층 계단':'2nd floor stairs of Sejong Building',
        '2학년 야자실':'A self-study room for 2nd Graders',
        '세종관 3층 계단':'3st floor stairs of Sejong Building',
        '1학년 야자실':'A self-study room for 1st Graders',
        '매점':'store',
        '경비실':'A security office',
        '창학관 - 세종관 이음길':'Changhak Building - Road to Sejong Building',
        '계림동산':'Gyelim-dongsan',
        '급식실':"cafeteria",
        '음악당':"music room",
        '음악당 화장실':"music room restroom",
        '체육관 입구':"the entrance to the Gym",
        '체육관':"Gym"
    };

    const JapaneseKeys = {
        '진로관 1층 계단': 'ジンロ館一階の階段',
        '진로관 1층 중앙': 'ジンロ館1階中央',
        '1층통로': '1階通路',
        '시청각실': '視聴覚室',
        '교과교실2': '教科教室2',
        '교과교실1': '教科教室1',
        '진로관 1층 화장실': 'ジンロ館1階トイレ',
        '진로관 2층 중앙': 'ジンロ館2階中央',
        '진로관 2층 계단': 'ジンロ館二階の階段',
        '진로관 2층 화장실': 'ジンロ館2階トイレ',
        '3-2': '3-2',
        '3-3': '3-3',
        '3-1': '3-1',
        '3학년 교무실': '三年生の職員室',
        '2층통로': '2階通路',
        '진로관 3층 계단': 'ジンロ館三階の階段',
        '진로관 3층 중앙': 'ジンロ館3階中央',
        '진로관 3층 화장실': 'ジンロ館3階トイレ',
        '3-7': '3-7',
        '3-8': '3-8',
        '3-6': '3-6',
        '3-5': '3-5',
        '3-4': '3-4',
        '교과교실3': '教科教室3',
        '3층통로': '3階通路',
        '과학교실3': '科学教室3',
        '공동교육과정 온라인교실': '共同教育課程 オンライン教室',
        '창학관 1층 중앙': 'チャンハク館1階中央',
        '창학관 1층 화장실': 'チャンハク館1階のトイレ',
        '다락': '多樂',
        '창학관 1층 계단': 'チャンハク館1階の階段',
        '창학관 1층 현관':'チャンハク館1階の玄関',
        '생물실': '生物室',
        
        '창학관 2층 계단': 'チャンハク館2階の階段',
        '창학관 2층 중앙': 'チャンハク館2階中央',
        '창의융합실': '創意融合室',
        '지구과학실': '地球科学室',
        '창학관 2층 화장실': 'チャンハク館2階のトイレ',
        '컴퓨터실': 'コンピューター室',
        '과학 동아리실': '科学部室',
        '융합교육부': '融合教育部',
        
        '창학관 3층 계단': 'チャンハク館3階の階段',
        '창학관 3층 중앙': 'チャンハク館3階中央',
        '창학관 3층 화장실': 'チャンハク館3階のトイレ',
        '연구실': '研究室',
        '멀티미디어실': 'マルチメディア室',
        '화학실': '化学室',
        'Wee class': 'Wee class',
        '프로파일실': 'プロファイル室',

        '통로': '通路',

        '본관 2층 우측 계단': '本館2階右側の階段',
        '본관 2층 우측 화장실': '本館2階右側のトイレ',
        '보건실': '保健室',
        '교육정보실': '教育情報室',
        '학생생활안전교육부': '学生生活安全教育部',
        '본관 2층 중앙':'本館2階 中央',
        '본관 2층 중앙 계단': '本館2階 中央 かに段',
        '방송실': '放送室',
        '교무실': '職員室',
        '2층 원형 계단': '二階 円形 階段',
        '교장실': '校長室',
        '창의인재부': '創意人材部',
        '본관 2층 좌측 화장실': '本館2階左側のトイレ',
        '본관 2층 좌측 계단': '本館2階左側の階段',
        '본관 1층 우측 계단': '本館1階右側の階段',
        '보일러실': 'ボイラー室',
        '발간실': '発刊室',
        '행정실': '行政室',
        '본관 1층 중앙': '本館1階 中央 ',
        '1층 원형 계단': '一階 円形 階段',
        '문서고': '文書庫',
        '학습도움실2': '学習支援室2',
        '학습도움실1': '学習支援室1',
        '본관 1층 화장실': '本館1階トイレ',
        '본관 1층 좌측 계단': '本館1階左側の階段',
        '본관 3층 우측 계단': '本館3階右側の階段',
        '본관 3층 우측 화장실': '本館3階右側のトイレ',
        '1-8': '1-8',
        '1-7': '1-7',
        '1-6': '1-6',
        '1-5': '1-5',
        '3층 홈베이스': '3階 ホームベース',
        '본관 3층 중앙 계단': '本館3階 中央 かに段',
        '1학년 교무실': '一年生の職員室',
        '1-4': '1-4',
        '1-3': '1-3',
        '1-2': '1-2',
        '1-1': '1-1',
        '본관 3층 좌측 계단': '本館3階左側の階段',
        '본관 3층 좌측 화장실': '本館3階左側のトイレ',
        '본관 4층 우측 계단': '本館4階右側の階段',
        '본관 4층 우측 화장실': '本館4階右側のトイレ',
        '2-8': '2-8',
        '2-7': '2-7',
        '2-6': '2-6',
        '2-5': '2-5',
        '4층 홈베이스': '4階 ホームベース',
        '본관 4층 중앙 계단': '本館4階 中央 かに段',
        '2학년 교무실': '二年生の職員室',
        '2-4': '2-4',
        '2-3': '2-3',
        '2-2': '2-2',
        '2-1': '2-1',
        '본관 4층 좌측 계단': '本館4階左側の階段',
        '본관 4층 좌측 화장실': '本館4階左側のトイレ','후관 입구':'後管入口',
        '후관 2층 계단':'後館二階階段',
        '미술실':'美術室',
        '후관 3층 좌측 계단':'後館3階左側の階段',
        '방통고협의실':'放送通信高等學校協議室',
        '방송통신고 교무실':'放送通信高等學校の職員室',
        '영어교실':'英語教室',
        '국어교실':'国語教室',
        '후관 3층 화장실':'後館3階トイレ',
        '후관 3층 우측계단':'後館3階右側階段',
        '후관 4층 좌측 계단':'後館4階左側の階段',
        '사회교실1':'社会教室1',
        '수학교실1':'数学教室1',
        '수학교실2':'数学教室2',
        '후관 4층 화장실':'後館4階トイレ',
        '후관 4층 우측 계단':'後館4階右側階段',
        '세종관 입구':'世宗館入口',
        '세종관 1층 중앙':'世宗館1階中央',
        '진로진학상담부':'進路進学相談部',
        '세종관 1층 화장실':'世宗館1階のトイレ',
        '인문사회부':'人文社会部',
        '도서관':'図書館',
        '세종관 1층 계단':'世宗館1階の階段',
        '세종관 2층 계단':'世宗館2階の階段',
        '2학년 야자실':'2年生の夜間自律学習室',
        '세종관 3층 계단':'世宗館3階の階段',
        '1학년 야자실':'1年生の夜間自律学習室',
        '매점':'売店',
        '경비실':'警備室',
        '창학관 - 세종관 이음길':'チャンハク館 - 世宗館館の結ぶ道',
        '계림동산':"鷄林洞山",
        '급식실':"給食室",
        '음악당':"音楽堂",
        '음악당 화장실':"音楽堂のトイレ",
        '체육관 입구':"体育館の入り口",
        '체육관':"体育館"
    };
        
        
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
        };
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

        const findDestination = () => {
            let start, end;

            위치설정('start', (selectedStart) => {
                start = selectedStart;
                위치설정('end', (selectedEnd) => {
                    end = selectedEnd;
                    const path = 목적지(start, end);
                    let output = '';
                    k=1
                    path.forEach(step => {
                        if (lang == 0){
                            output +=  k+'. '+step + '\n';
                        }
                        else if (lang == 1){
                            output +=  k+'. '+EnglishKeys[step] + '\n';
                        }
                        else{
                            output +=  k+'. '+JapaneseKeys[step] + '\n';
                        }
                        k+=1;
                    })
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
                k=1
                path.forEach(step => {
                    if (lang == 0){
                        output += k+'. '+step + '\n';
                    }
                    else if (lang == 1){
                        output += k+'. '+EnglishKeys[step] + '\n';
                    }
                    else{
                        output += k+'. '+JapaneseKeys[step] + '\n';
                    }
                    k+=1;
                })
                    drawPath(path);                    
                    document.getElementById('output').textContent = output;
                    document.getElementById('main-menu').classList.remove('hidden');
                drawPath(path);
                document.getElementById('main-menu').classList.remove('hidden');
            });
        };

        const nodePositions = {
            //진로관 1층
            '진로관 1층 계단': {x : 750, y: 286 },
            '진로관 1층 중앙': {x : 750, y: 286 },
            '1층통로': {x : 630, y: 298 },
            '시청각실': {x : 750, y: 274 },
            '교과교실2': {x : 720, y: 298 },
            '교과교실1': {x : 690, y: 298 },
            '진로관 1층 화장실': {x : 750, y: 310 },
            
            // 진로관 2층
            '진로관 2층 중앙': {x : 750, y: 241 },
            '진로관 2층 계단': {x : 750, y: 241 },
            '진로관 2층 화장실': {x : 750, y: 250 },
            '3-2': {x : 750, y: 225 },
            '3-3': {x : 750, y: 209 },
            '3-1': {x : 660, y: 250 },
            '3학년 교무실': {x : 690, y: 250 },
            '2층통로': {x : 630, y: 250 },
            
            // 진로관 3층
            '진로관 3층 계단': {x : 750, y: 190 },
            '진로관 3층 중앙': {x : 750, y: 190 },
            '진로관 3층 화장실': {x : 750, y: 200 },
            '3-7': {x : 750, y: 170 },
            '3-8': {x : 750, y: 156 },
            '3-6': {x : 720, y: 200 },
            '3-5': {x : 690, y: 200 },
            '3-4': {x : 660, y: 200 },
            '교과교실3': {x : 640, y: 200 },
            '3층통로': {x : 630, y: 200 },
            
            '과학교실3': {x : 602, y: 294 },
            '공동교육과정 온라인교실': {x : 564, y: 294 },
            '창학관 1층 중앙': {x : 520, y: 300 },
            '창학관 1층 현관': {x : 564, y: 326 },
            '창학관 1층 화장실': {x : 490, y: 294 },
            '다락': {x : 525, y: 326 },
            '창학관 1층 계단': {x : 520, y: 294 },
            '생물실': {x : 602, y: 326 },

            '창학관 2층 계단': {x : 540, y: 237 },
            '창학관 2층 중앙': {x : 540, y: 250 },
            '창의융합실': {x : 602, y: 237 },
            '지구과학실': {x : 602, y: 266 },
            '창학관 2층 화장실': {x : 520, y: 237 },
            '컴퓨터실': {x : 490, y: 266 },
            '과학 동아리실': {x : 550, y: 266 },
            '융합교육부': {x : 490, y: 237 },

            '창학관 3층 계단': {x : 540, y: 181 },
            '창학관 3층 중앙': {x : 540, y: 200 },
            '창학관 3층 화장실': {x : 520, y: 181 },
            '연구실': {x : 509, y: 181 },
            '멀티미디어실': {x : 525, y: 213 },
            '화학실': {x : 602, y: 213 },
            'Wee class': {x : 570, y: 181 },
            '프로파일실': {x : 602, y: 181 },

            '통로': {x : 408, y: 156 },

            '본관 2층 우측 계단': {x : 300, y: 170 },
            '본관 2층 우측 화장실': {x : 300, y: 156 },
            '보건실': {x : 300, y: 190 },
            '교육정보실': {x : 300, y: 205 },
            '학생생활안전교육부': {x : 300, y: 229 },
            '본관 2층 중앙 계단': {x : 300, y: 280 },
            '본관 2층 중앙': {x : 300, y: 265 },
            '방송실': {x : 300, y: 300 },
            '교무실': {x : 300, y: 330 },
            '2층 원형 계단': {x : 291, y: 351 },
            '교장실': {x : 300, y: 359 },
            '창의인재부': {x : 300, y: 390 },
            '본관 2층 좌측 화장실': {x : 300, y: 415 },
            '본관 2층 좌측 계단': {x : 300, y: 405 },
            
            '본관 1층 우측 계단': {x : 330, y: 280 },
            '보일러실': {x : 330, y: 240 },
            '발간실': {x : 330, y: 280 },
            '행정실': {x : 330, y: 300 },
            '본관 1층 중앙': {x : 330, y: 320 },
            '1층 원형 계단': {x : 330, y: 351 },
            '문서고': {x : 330, y: 335 },
            '학습도움실2': {x : 330, y: 359 },
            '학습도움실1': {x : 330, y: 390 },
            '본관 1층 화장실': {x : 330, y: 415 },
            '본관 1층 좌측 계단': {x : 330, y: 405 },
            
            '본관 3층 우측 계단': {x : 270, y: 169 },
            '본관 3층 우측 화장실': {x : 270, y: 156 },
            '1-8': {x : 270, y: 190 },
            '1-7': {x : 270, y: 205 },
            '1-6': {x : 270, y: 229 },
            '1-5': {x : 270, y: 240 },
            '3층 홈베이스': {x : 270, y: 265 },
            '본관 3층 중앙 계단': {x : 270, y: 280 },
            '1학년 교무실': {x : 270, y: 300 },
            '1-4': {x : 270, y: 320 },
            '1-3': {x : 270, y: 335 },
            '1-2': {x : 270, y: 359 },
            '1-1': {x : 270, y: 390 },
            '본관 3층 좌측 계단': {x : 270, y: 405 },
            '본관 3층 좌측 화장실': {x : 270, y: 415 },

            '본관 4층 우측 계단': {x : 240, y: 169 },
            '본관 4층 우측 화장실': {x : 240, y: 156 },
            '2-8': {x : 240, y: 190 },
            '2-7': {x : 240, y: 205 },
            '2-6': {x : 240, y: 229 },
            '2-5': {x : 240, y: 240 },
            '4층 홈베이스': {x : 240, y: 265 },
            '본관 4층 중앙 계단': {x : 240, y: 280 },
            '2학년 교무실': {x : 240, y: 300 },
            '2-4': {x : 240, y: 320 },
            '2-3': {x : 240, y: 335 },
            '2-2': {x : 240, y: 359 },
            '2-1': {x : 240, y: 390 },
            '본관 4층 좌측 계단': {x : 240, y: 405 },
            '본관 4층 좌측 화장실': {x : 240, y: 415 },

            '후관 입구': {x : 175, y: 262 },
            '후관 2층 계단': {x : 175, y: 262 },
            '미술실': {x : 175, y: 246 },
            
            '후관 3층 좌측 계단': {x : 136, y: 262 },
            '방통고협의실': {x : 136, y: 246 },
            '방송통신고 교무실': {x : 136, y: 229 },
            '영어교실': {x : 136, y: 205 },
            '국어교실': {x : 136, y: 189 },
            '후관 3층 화장실': {x : 136, y: 156 },
            '후관 3층 우측계단': {x : 136, y: 169 },
            
            '후관 4층 좌측 계단': {x : 105, y: 262 },
            '사회교실1': {x : 105, y: 246 },
            '수학교실1': {x : 105, y: 205 },
            '수학교실2': {x : 105, y: 189 },
            '후관 4층 화장실': {x : 105, y: 156 },
            '후관 4층 우측 계단': {x : 105, y: 169 },
            
            '세종관 입구': {x : 380, y: 120 },
            '세종관 1층 중앙': {x : 380, y: 100 },
            '진로진학상담부': {x : 340, y: 90 },
            '세종관 1층 화장실': {x : 360, y: 90 },
            '인문사회부': {x : 408, y: 100 },
            '도서관': {x : 408, y: 85 },
            '세종관 1층 계단': {x : 380, y: 90 },
            '세종관 2층 계단': {x : 380, y: 70 },
            '2학년 야자실': {x : 380, y: 70 },
            '세종관 3층 계단': {x : 380, y: 40 },
            '1학년 야자실': {x : 380, y: 40 },
            '매점' : {x : 480, y : 100 },
            '경비실':{x:405, y : 500},
            '창학관 - 세종관 이음길': {x : 600, y : 160},
            '계림동산': {x : 200, y : 100},
            '급식실':{x : 120, y : 390},
            '음악당':{x : 50, y : 390},
            '음악당 화장실':{x : 80, y : 390},
            '체육관 입구':{x : 200, y : 500},
            '체육관':{x : 100, y : 500}
        }