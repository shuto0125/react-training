import React from "react";

//指定するためのpropsの型を用意する
type Props = {
  name: string;
  // onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

//引数にも型の指定が必要
function add(a: number, b: number) {
  return a + b;
}

// FC は　FunctionComponent の略 上で用意したpropsの型を指定
const Hello: React.FC<Props> = ({ name }) => {
  return <strong>HELLO {name} component</strong>;
};

//typescript:boolean型を条件分岐するにはどーしたら良いのか？？
const Hello431 = (isReact: any): any => {
  if (isReact === true) {
    return <p>Hello React, isReact True</p>;
  }

  return <p>Hello Vue.js, isReact False</p>;
};

function App() {
  const message = "React";

  const url = "https://reactjs.org/";

  //スプレッド構文(...)を使えば属性をまとめて埋め込める
  const attrs = {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React logo",
    width: "212px",
    height: "150px",
  };

  const isReact: boolean = true;

  return (
    <>
      <h1 className="heading">HEADING REACT</h1>
      <p>
        <Hello name="React" />
      </p>
      <p>
        <Hello name="Vue" />
      </p>
      <p>
        Hello{" "}
        <a href={url} target="_blank">
          {message}
        </a>
      </p>
      <p>1 + 2 = {add(1, 2)}</p>
      <img {...attrs} />

      <Hello431 isReact={isReact} />
    </>
  );
}
export default App;

export const MapApp = () => {
  const books = [
    { id: 1, title: "React.js & Next.js 超入門" },
    { id: 2, title: "React開発 現場の教科書" },
    { id: 3, title: "Reactビギナーズガイド" },
  ];

  // 4.4.2 mapの実行結果が格納された変数を埋め込む
  const listItems = books.map((book) => <li key={book.id}>{book.title}</li>);

  return (
    <>
      {/* //4.4.1 map　を埋め込む */}
      <ul>
        {books.map((book) => (
          //key 属性は必ず指定する必要がある
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>

      {/* // 4.4.2 mapの実行結果が格納された変数を埋め込む */}
      <ul>{listItems}</ul>
    </>
  );
};

// 4.4.3 map の実行結果を返す関数を埋め込む
export const MapAppResult = () => {
  const books = [
    { id: 1, title: "超入門" },
    { id: 2, title: "現場の教科書" },
    { id: 3, title: "ビギナーズガイド" },
  ];
  const listItems = (library: any) =>
    books.map((book) => (
      <li key={book.id}>
        {library}
        {book.title}
      </li>
    ));
  return (
    <>
      <ul>{listItems("結果埋め込み: ")}</ul>
    </>
  );
};

export const HandleApp = () => {
  // 4.5.1 クリック時のイベントハンドリング
  function handleClick() {
    console.log("clicked");
  }

  // 4.5.2 イベントハンドラに引数を渡す
  function handleClickMessage(message: string) {
    console.log(`Hello, ${message}`);
  }

  // 4.5.3 Eventオブジェクトを利用する

  // any型で諦めない React.EventCallback
  // https://qiita.com/Takepepe/items/f1ba99a7ca7e66290f24
  // todo props にonClickの型を入れる？
  function handleClickEvent(event: any) {
    // submitイベントの発生元であるフォームが持つデフォルトの動作をキャンセルするメソッド
    // https://qiita.com/yokoto/items/27c56ebc4b818167ef9e
    event.preventDefault();
    console.log("Hello, React!!");
  }

  // 4.5.3-adv
  function handleClickEventArgs(event: any, message: string) {
    event.preventDefault();
    console.log(`Hello, ${message}`);
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>click</button>
      </div>
      <div>
        <button onClick={() => handleClickMessage("React")}>click</button>
      </div>
      <div>
        <a
          href="https://reactjs.org/"
          onClick={handleClickEvent}
          target="_blank"
        >
          React
        </a>
      </div>
      <div>
        <a
          href="https://reactjs.org/"
          onClick={(event) => handleClickEventArgs(event, "AUGS!!!")}
          target="_blank"
        >
          React Args
        </a>
      </div>
    </>
  );
};
