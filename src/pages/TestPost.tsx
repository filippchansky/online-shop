import { Button, Dropdown, MenuProps } from "antd";
import Input from "antd/es/input/Input";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProductForm from "../components/addProductForm/AddProductForm";
import OrangeButton from "../components/UI/OrangeButton/OrangeButton";
import { IProducts } from "../models/models";
import { useSearchProductsQuery } from "../store/backend/backend.api";

interface TestPostProps {}

const TestPost: React.FC<TestPostProps> = ({}) => {
  // const [value, setValue] = useState({})


  


  const [imgBase64, setImgBase64] = useState<any>('');

  console.log(imgBase64); // формат base64

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgBase64(reader.result);
      sendImageToServer(String(reader.result))
    };
  };
  const sendImageToServer = async (base64Image: string) => {
    try {
        const response = await fetch('http://localhost:8080/productImage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({productId: 1, picture: base64Image}),
        });

        if (response.ok) {
            console.log('Image successfully uploaded');
        } else {
            console.log('An error occurred during the upload process');
        }
    } catch (error) {
        console.log('An error occurred during the fetch process');
    }
};

  const submitPost = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  

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
    <div className="container">
      <form action="">
        <input type="file" onChange={handleChange} />
        <button onClick={submitPost}>отправить</button>
      </form>

      <Button type="primary">Primary Button</Button>

      <Dropdown menu={{ items }} placement="bottom">
        <Button>bottom</Button>
      </Dropdown>
      
      <AddProductForm/>

      <img src={imgBase64} alt="" />
      
    </div>
  );
};
export default TestPost;
