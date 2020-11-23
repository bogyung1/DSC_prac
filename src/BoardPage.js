import React, {Component, useState} from 'react';


const BoardPage =()=> {


    const [boards, setBoard]=useState([
        {id:1,title: "첫 번째 글", contents: "React 첫 Study" },
        {id:2,title: "두 번째 글", contents: "다들 화이팅!"},
                                      ]);
    const [inputTitle, setInputTitle]=useState('');
    const [inputContent, setInputContent]=useState('');
    const [nextId, setNextId]= useState(3);

    const onChange1 = e => setInputTitle(e.target.value);
    const onChange2 = e => setInputContent(e.target.value);


    const removeList = id => {
        const nextBoards=boards.filter(board=> board.id !== id);
        setBoard(nextBoards);
    }




    const boardList=boards.map(board=>(
        <div key={board.id} onDoubleClick={()=> removeList(board.id)}>
            <p>글 제목: {board.title}</p>
            <p>내용: {board.contents}</p>
        </div>
    ));

    const onClick = () => {
        const nextBoards = boards.concat({
            id: nextId,
            title: inputTitle,
            contents: inputContent

        });
        setNextId(nextId+1);
        setBoard(nextBoards);
        setInputTitle('');
        setInputContent('');

    }



    return (
        <div >
            <h1>게시판</h1>
            <input type="text"
                   placeholder='글 제목'
                   name='title'
                   value={inputTitle}
                   onChange={onChange1}/>
            <p><textarea placeholder='내용'
                         value={inputContent}
                         cols="20"
                         rows="5"
                         onChange={onChange2}
                         name='contents'/>
            </p>
            <button >파일선택</button>
            <h4>선택된 파일 없음</h4>
            <button onClick={onClick}>작성하기</button>

            <div>
                {boardList}
            </div>
        </div>


    );

}

export default BoardPage;
