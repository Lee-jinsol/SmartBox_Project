
// ---------------------------------------
// after
const { Router } = require('express')
/*
모듈식으로 등록하는 개념, 파일 단위로 모듈화 시켜서 라우팅 등록
라우터 단위로 request가 발생하면 실행
라우팅이란! -> 애플리케이션 엔드 포인트(URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식을 말합니다.
 */

const user = require('./user')
const list = require('./list')
const cart = require('./cart')

const router = Router()


/* 최초 url 분리처리. */
router.use('/user', user) // localhost:3000/user로 접속하면 이쪽으로 분기처리 됩니다.
router.use('/list', list)
router.use('/cart', cart)



module.exports = router // 현재 js파일을 다른 파일에서도 사용할 수 있도록 export
