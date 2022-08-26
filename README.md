# 🦅EEAGLE
## 뉴욕타임즈 기사 검색 사이트 프로젝트 <br><br>

## ⚙ **사용기술스택**
- ### create-react-app
- ### react-router-dom
- ### redux
- ### styled-components

<br><br>

## 📅 **기간**
### 2022.08.25 ~ 2022.09.02

<br><br>

## 📝 **프로젝트 진행과정**
### [WIKI](https://github.com/jim1286/STFE5-Mini_Project/wiki) 에서 확인
<br><br>

## 📌 **뉴욕타임즈 기사 검색 사이트 기능별 소개**

## Routing 기능
- [ ] "/" url에서는 기사 검색 페이지 렌더
- [ ] "/clip" url에서 내가 clip한 기사 페이지 렌더
- [ ] 그 외 url은 "/"로 redirect 진행

## input 기능
- [ ] 마지막 타이핑 이후 0.5초 동안 추가 입력이 없으며, input value가 있는 경우 검색 api 호출
- [ ] 최대 5개까지 search history 저장 (브라우저 종료시에도 지속)
- [ ] search history가 존재하고 input에 focus 중이면 search history 노출

## news list
- [ ] "/"와 "/clip"은 기사 리스트를 렌더
- [ ] 기사 리스트는 다음 내용을 포함하는 기사 카드를 렌더 (타이틀 / 날짜 / clip하기 버튼 / 자세히 보기 버튼)
- [ ] infinite scroll (스크롤이 마지막에 닿았을 때 다음 페이지 요청)
- [ ] 첫 페이지가 화면의 높이를 모두 채우지 못한 경우에도 페이지 요청

## clip 기능
- [ ] 기사 카드의 clip버튼을 클릭하여 해당 기사를 즐겨찾기
- [ ] clip된 기사들은 "/clip"에서 확인
- [ ] clip된 기사들은 브라우저를 재시작하여도 유지
- [ ] 기사를 unclip 하면 더는 "/clip"에서 확인할 수 없음

<br><br>

## 🤞 **커밋 컨벤션**
- feat :  새로운 기능 추가
- fix : 버그 수정
- style : 코드 포맷팅, 세미콜론 추가 등 코드 변경이 없는 경우
- docs : 문서 수정
- refactor : 코드 리팩토링
- conf : 패키지 매니저 등 빌드 관련 설정 수정
- chore : 그외 자잘한 수정 및 설정

<br><br>

## 💚 **팀원소개** 
<br>

|    조장 황지민   |    윤우경   |    김채현   |    곽희빈   |    이정민   |
|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
|<img src ="https://user-images.githubusercontent.com/53160685/186587181-134201c0-8596-46be-80a0-c8cb9220d3f7.jpg" alt = "황지민" height="150px" width="150px">|<img src ="https://user-images.githubusercontent.com/53160685/186593521-e2bce89e-3ca3-452d-b678-4da25d1f2afe.jpg" alt = "윤우경" height="150px" width="150px">|<img src ="https://user-images.githubusercontent.com/53160685/186816884-03e9b502-6f71-4c8b-bf51-fed934f4ef66.jpg" alt = "김채현" height="150px" width="150px">|<img src ="https://user-images.githubusercontent.com/53160685/186587347-f1d4725e-337d-4549-aee5-e2d27ae51273.png" alt = "곽희빈" height="150px" width="150px">|<img src ="https://user-images.githubusercontent.com/53160685/186586283-3d723020-6b89-4a69-8b1d-9ece068c097b.jpg" alt = "이정민" height="150px" width="150px">|
|[jim1286](https://github.com/jim1286)|[wookyung2](https://github.com/wookyung2)|[ChyunKim](https://github.com/ChyunKim)| [HarryA123](https://github.com/HarryA123) |[froggy1014](https://github.com/froggy1014)|



