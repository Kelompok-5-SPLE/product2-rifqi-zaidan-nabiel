/*
	Generated on 31/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const MenuTable = ({ listPromotionalMenu,
	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listPromotionalMenu]}
  	  itemsAttrs={[
          {
            id: "discountPercentage",
            condition: "",
            label: "discountPercentage",
  		  featureName: "discountPercentage",
            editable:  false 
          }
  ,
          {
            id: "name",
            condition: "",
            label: "name",
  		  featureName: "name",
            editable:  false 
          }
  ,
          {
            id: "description",
            condition: "",
            label: "description",
  		  featureName: "description",
            editable:  false 
          }
  ,
          {
            id: "price",
            condition: "",
            label: "price",
  		  featureName: "price",
            editable:  false 
          }
  ,
          {
            id: "category",
            condition: "",
            label: "category",
  		  featureName: "category",
            editable:  false 
          }
  ]}
  	/>
  </>
  )
};

export default MenuTable;
