import { Button, Modal } from "antd";
import React, { useState } from "react";
import style from "./mobilefilter.module.css";

interface MobileFilterProps {
    children: React.ReactNode
    isModalOpen: boolean
    setIsModalOpen: Function
}

const MobileFilter: React.FC<MobileFilterProps> = ({children, isModalOpen, setIsModalOpen}) => {
  

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.container}>
      <Button type="primary" onClick={showModal}>
        Фильтры
      </Button>
      <Modal
        title="Фильтры"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={style.content}>
        {children}
        </div>
      </Modal>
    </div>
  );
};
export default MobileFilter;
