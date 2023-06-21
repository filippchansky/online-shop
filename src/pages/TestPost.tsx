import { Button, Dropdown, MenuProps } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrangeButton from "../components/UI/OrangeButton/OrangeButton";
import { IProducts } from "../models/models";
import { useSearchProductsQuery } from "../store/backend/backend.api";

interface TestPostProps {}

const TestPost: React.FC<TestPostProps> = ({}) => {
  // const [value, setValue] = useState({})


  


  const [imgBase64, setImgBase64] = useState<any>("");

  console.log(imgBase64); // формат base64

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgBase64(reader.result);
    };
  };

  const submitPost = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const testDropdown = () => {
    
  }

  const items: MenuProps['items'] = [
    {
      key: '2',
      label: (
        <Link to={`/catalog/asc`}>
        <p >
          Запрос
        </p>
        </Link>
      ),
    },
    
  ];

  return (
    <div>
      <form action="">
        <input type="file" onChange={handleChange} />
        <button onClick={submitPost}>отправить</button>
      </form>

      <Button type="primary">Primary Button</Button>

      <Dropdown menu={{ items }} placement="bottom">
        <Button>bottom</Button>
      </Dropdown>
    </div>
  );
};
export default TestPost;
