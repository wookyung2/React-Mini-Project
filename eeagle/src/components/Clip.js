import React from "react";
// import { FetchApi } from "../util/FetchApi";
import clipmark from "../img/clipmark.svg";
import Nav from "./Nav";
import {
  ListContanier,
  ListDiv,
  Title,
  ATag,
  ClipIcon,
  Content,
} from "../style/style";
import { useDispatch, useSelector } from "react-redux";
import { clipToggle } from "../redux-store/newsSlice";

const Clip = () => {
  // const [clip, useClip] = useState();
  const { clipped: clippedArticles } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // 임시로 search 내용 작성
  //   // 전역상태관리시 변수로 변경예정
  //   FetchApi(useClip, "clip");
  // }, []);

  // const cliplist =
  //   clip &&
  //   clip.map((ele) => {
  //     // NYT list date 형태 변경 => 20XX.XX.XX 형태
  //     const date = `${ele.pub_date.substr(0, 4)}.${ele.pub_date.substr(
  //       5,
  //       2
  //     )}.${ele.pub_date.substr(8, 2)}`;

  //     const eventUnClip = () => {
  //       // clip 버튼 unclip으로 클릭시 dispatch 변경
  //       // store 작성시 변경예정
  //       console.log("dispatch unclip 전달", ele._id);
  //     };

  //     return (
  //       <ListDiv key={ele._id}>
  //         <Title>
  //           {/*타이틀 클릭시 새창으로 이동*/}
  //           <ATag
  //             href={ele.web_url}
  //             target="_blank"
  //             rel="noreferrer"
  //             title="Detail view"
  //           >
  //             {ele.headline.main}
  //           </ATag>
  //           <ClipIcon
  //             src={clipmark}
  //             alt="clipicon"
  //             onClick={eventUnClip}
  //           ></ClipIcon>
  //         </Title>
  //         <Content>{ele.snippet}</Content>
  //         <Content>{date}</Content>
  //       </ListDiv>
  //     );
  //   });
  return (
    <>
      <Nav />
      <ListContanier>
        {clippedArticles.map((ele) => (
          <ListDiv key={ele._id}>
            <Title>
              {/*타이틀 클릭시 새창으로 이동*/}
              <ATag
                href={ele.web_url}
                target="_blank"
                rel="noreferrer"
                title="Detail view"
              >
                {ele.headline.main}
              </ATag>
              <ClipIcon
                src={clipmark}
                alt="clipicon"
                onClick={() => dispatch(clipToggle({ id: ele._id }))}
              ></ClipIcon>
            </Title>
            <Content>{ele.snippet}</Content>
            {/* <Content>{date}</Content> */}
          </ListDiv>
        ))}
      </ListContanier>
    </>
  );
};

export default Clip;
