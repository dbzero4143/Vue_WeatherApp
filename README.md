# Vue_WheatherApp
vue를 이용하여 만든 날씨 앱

# 왜?
예전부터 내가 직접 만든 기상예보 사이트를 사용하고 싶었습니다.

# 어떻게?
open weather api 라는 오픈 api를 사용하여 검색한 해당 나라의 날씨정보를 불러오려고 합니다.

# 어려웠던 점?
netlify를 이용하여 배포할때 배포주소는 https로 시작하고 불러올 api주소는 http로 시작해서 서로 에러가 났었다. 처음엔 이 에러인줄 모르고 도메인을 api 도메인까지 설정해줘야 하나? 싶었다. 구글링을 해봐도 잘 안나왔고 어디 물어볼때도 없어서 sundomain설정이라는 유료기능을 사용할뻔했는데 갑자기 뭐에 씌인듯 에러문을 다시 확인했고 https와 http가 서로 일치하지 않아서 문제가 생긴걸 알게되었다. 그래서 api주소의 앞부분을 https로 수정해주었더니 정상적으로 돌아왔다.

# link
https://vue-weatherapp.netlify.app
