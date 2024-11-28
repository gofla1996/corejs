import "/src/style/style.css";
import { getNode, insertLast } from "kind-tiger";
import santa from "/src/assets/santa.png";
import {btn} from "/src/style/style.module.css";

const app = getNode("#app");

// 주기적으로 변경되는 이미지 (동적자산)
// 정적자산은 public 폴더에 넣어서 사용, 바로 파일 이름으로 사용 "/santa.png"
// public 폴더에 있는 파일은 전부 다 root에 있다고 인식
const template = /* html */ `
  <figure class="container">
    <img style="width:30vw" src="${santa}" />
    <figcaption>산타 모자를 쓴 호랑이🎅🏼</figcaption>
  </figure>
  <button class="${btn}"> BUTTON </button>
`;

insertLast(app, template);
