## 사용자 감정 기반 음악 추천 서비스   

+ 사용자가 쓰는 텍스트를 감정 분석하여 해당하는 감정에 관련된 노래를 멜론에서 틀어줌.  

+ 사용자가 쓰는 텍스트의 개인정보 보호를 위해 federated learning을 이용함.    

## 사용자 감정 기반 음악 추천 서비스(v1)  
> Data: 기쁨 슬픔 우울 분노 설렘  
> Model: lstm, kobert  

### ISSUE
+ 슬픔과 우울 데이터의 유사도가 높음.  
![image](https://user-images.githubusercontent.com/44723287/98562749-bb4e5a80-22ed-11eb-8645-6dc8cad9f16a.png)

## 사용자 감정 기반 음악 추천 서비스(v2)
> Data: 기쁨 슬픔 분노 놀람  
> Model: lstm, kobert  

### ISSUE
+ 분노감정의 텍스트를 슬픔으로 혼동함.      
![image](https://user-images.githubusercontent.com/44723287/98563657-c6ee5100-22ee-11eb-9b4d-26bf513def28.png)  
  
+ lstm, kobert 모델의 학습곡선에서 overfitting을 확인함.   
![image](https://user-images.githubusercontent.com/44723287/98563580-afaf6380-22ee-11eb-8a31-4733eab6229f.png)  

+ 각 클래스별 데이터 개수가 동일하지 않아서 편향될 가능성이 높음.  

## 사용자 감정 기반 음악 추천 서비스(v3)
+ pretrain 모델이 들어간 kobert로 모델 결정  
+ 오버피팅 문제 해결하기 위해 kobert dropout = 0.5 -> 0.3  
+ 데이터의 독립성과 양을 위해 놀람과 공포를 포함하는 감정인 불안으로 변경  

> Data: 기쁨 슬픔 분노 불안 (각 8000개)  
> Model: kobert  

+ F1 score and confusion matrix  
![image](https://user-images.githubusercontent.com/44723287/98563822-fa30e000-22ee-11eb-9daf-1a0b64b985b3.png)

+ Word 2 Vec Embedding Projector (기쁨, 불안, 슬픔, 화남)   
![happy_embedding](https://user-images.githubusercontent.com/44723287/98563973-23517080-22ef-11eb-945f-c8e5572bb107.gif)
![unstable_embedding](https://user-images.githubusercontent.com/44723287/98563998-2a787e80-22ef-11eb-8eda-bcfe77b6336d.gif)
![sad_embedding](https://user-images.githubusercontent.com/44723287/98563990-277d8e00-22ef-11eb-9efa-a22ea40020cd.gif)
![angry_embedding](https://user-images.githubusercontent.com/44723287/98563943-1c2a6280-22ef-11eb-9822-afe97929d3f1.gif)
