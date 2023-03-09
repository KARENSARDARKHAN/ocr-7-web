import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Products from "../api/list.json";
import Slider from "../components/slideshow";
import Evaluation from "../components/stars";
import CollapseTool from "../components/collapse";
import _errorSet from "../components/_ErrorSet";
import "../styles/stylesheet.css";