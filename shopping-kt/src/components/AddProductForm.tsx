import React, { useState } from 'react';
import { Input, Button, Form, Row, Col } from 'antd';

const AddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    if (!productName || !productPrice) {
      return;
    }
    onAddProduct({ name: productName, price: productPrice });
    setProductName('');
    setProductPrice('');
  };

  return (
    <Form>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item>
            <label htmlFor="">Product Name</label>
            <Input
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
  
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
          <label htmlFor="">Product price</label>

            <Input
              placeholder="Product Price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button type="primary" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddProductForm;
