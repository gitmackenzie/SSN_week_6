const express = require("express");
const Comments = require("./../models/comments");
const router = express.Router();


// comment 가져오기
router.get('/:user/comments', async (request, response) => {
    let comment = await Comments.findById(request.params.id);
    console.log(comment)
});

//comment 달기
router.post('/:user/comments', async (request, response) => {
    // 프론트에서 가져오는것 추가
    const{ writer, content, Date, userId} = request.body
    // 수정된 부분: new comment -> create 메서드, deconstruction 사용

    console.log(request.body);

    // try {
    //     console.log("1")
        await Comments.create({writer, content, Date, userId})
        // 수정된 부분: new comment -> create 메서드, deconstruction 사용
        return response.status(200).send({ });
        // 수정할 때 확인한 방법:
        // try & catch 부분 다 주석 처리하고 return response만 찍어서 썬더 클라이언트로 들어오는지 확인
        
    // } catch (error) {
    //     console.log("2")
    //     console.log(error);
    //     return response.status(400).send({ });
    // }
    // return; 
});




module.exports = router;
