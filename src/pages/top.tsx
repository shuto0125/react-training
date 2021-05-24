import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

export const TopPage: FC = () => {
  return (
    <React.Fragment>
      <div>TopPage</div>
      <Link to="/users">ユーザー一覧</Link>
      <ItemGroups />
    </React.Fragment>
  );
};
const my5 = {
  marginTop: "5px",
  marginBottom: "5px",
};
const itemStyle = {
  border: "1px solid #000",
  padding: "5px",
};
const itemGroupStyle = {
  border: "1px solid #900",
  padding: "5px",
};
const itemGroupsStyle = {
  border: "1px solid #009",
  padding: "5px",
};
const buttonStyle = {
  display: "inline-block",
  color: "#fff",
  background: "#333",
  padding: "5px",
  borderRadius: "20px",
  cursor: "pointer",
};

const Button: FC = () => {
  return <div style={buttonStyle}>ボタン</div>;
};

const Item: FC = (props) => {
  return (
    <>
      <div style={itemStyle}>Item</div>
    </>
  );
};

const ItemGroup: FC = () => {
  const [itemsAry, setItemsAry] = useState([{ value: "アイテム" }]);

  const addItem = () => {
    const newItem = {
      value: "アイテム",
    };
    setItemsAry([...itemsAry, newItem]);
  };
  // 引数 index は削除したい要素のインデックス
  const deleteItem = (index: any) => {
    // 現在の items から、引数 index と同じインデックスの要素を
    // 削除した配列を setItems に渡す。
    setItemsAry(itemsAry.filter((_, i) => i !== index));
  };
  return (
    <div style={itemGroupStyle}>
      ItemGroup
      <ul>
        {itemsAry.map((item: any, index: any) => (
          <li key={index}>
            {item.value}
            {item.id}
            <Item />
            <button onClick={() => deleteItem(index)}>削除</button>
            {/* <button onClick={() => deleteItem(index)}>削除</button> */}
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Item追加</button>
    </div>
  );
};

const ItemGroups: FC = () => {
  const [itemGroupAry, setItemGroupAry] = useState([{ value: "アイテム" }]);

  const addItemGroup = () => {
    const newItemGroup = {
      value: "アイテム",
    };
    setItemGroupAry([...itemGroupAry, newItemGroup]);
  };
  // 引数 index は削除したい要素のインデックス
  const deleteItem = (index: any) => {
    // 現在の itemGroup から、引数 index と同じインデックスの要素を
    // 削除した配列を setItemGroup に渡す。
    setItemGroupAry(itemGroupAry.filter((_, i) => i !== index));
  };
  return (
    <div style={itemGroupStyle}>
      ItemGroups
      <ul>
        {/* <ItemGroup /> */}

        {itemGroupAry.map((item: any, index: any) => (
          <li key={index}>
            {item.value}
            {item.id}
            <ItemGroup />
            <button onClick={() => deleteItem(index)}>削除</button>
          </li>
        ))}
      </ul>
      <button onClick={addItemGroup}>ItemGroup追加</button>
    </div>
  );
};
