"use client";
import React, { useState, useEffect } from 'react';
import { Props } from './interface'
import './aviso.css';

export function fechar(): boolean {
    return (false)
}

const Aviso = (props: Props) => {

  return (
    <>
        <div className="alert-container">
          <div className="alert">
            <span onClick={fechar} className="close-btn">
              &times;
            </span>
            <p>{props.message}</p>
          </div>
        </div>
    </>
  );
};

export default Aviso;