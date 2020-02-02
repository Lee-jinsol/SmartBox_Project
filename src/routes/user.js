const { Router } = require('express')

const userCtrl = require('../controller/userController') // controller폴더의 userController.js 파일을 userCtrl 변수에 담음.(이렇게 사용하기위해 아까 "module.exports = 불라불라" 를 한 것! )

const user = Router()

// post -> db에 데이터를 입력할때 사용하는 메소드, ex) 회원가입시 사용자가 입력한 id,pw가 데이터베이스에 저장된다!
// get -> db에 있는 데이터를 가져와 사용자에게 보여줄때, ex) 게시판에 들어갔을때 사용자에게 보여질 게시글목록들을 db에서 가져온다!
// delete -> db에 있는 데이터를 삭제할 때 사용, ex) 좋아요취소, 계정탈퇴, 게시글삭제, 댓글삭제...
// put -> db에 있는 기존데이터를 새로운 데이터로 업데이트 시킬 때 사용, ex) 특정 게시글의 좋아요 수, 댓글 수정하기...

/* GET home page. */
user.post('/signup', userCtrl.signUp)
// user.post('/경로/:user_idx', userCtrl.넘길함수)
// -> /:user_idx는 url로 받는 parameter, 특정 사용자에대한 정보만 가져와야할때 해당 사용자만의 고유 인덱스값을 받아 쿼리문에 넣어 해당 사용자의 정보만 가져올 때 사용한다.
user.post('/signin', userCtrl.signIn)


user.get('/getuser', userCtrl.getuser)

module.exports = user
