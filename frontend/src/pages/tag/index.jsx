import React, { Component } from "react";
import { useParams } from "react-router-dom";

export default function Tag() {
  let { tag } = useParams()
  return (
    <h2>{tag}</h2>
  )
}

