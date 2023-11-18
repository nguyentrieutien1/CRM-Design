import Image from "next/image";
import React from "react";
import { TableText } from "src/components/core/text";
import styled from "styled-components";
import BuildingIcon from "public/icons/building-icon.svg";
interface DashboardItemProps {
  item: {
    name: string;
    quantity: number;
    color: string;
  };
}
export default function DashboardItem(props: DashboardItemProps) {
  const { color, name, quantity } = props.item;
  return (
    <Item className=" mb-3">
      <Icon $backgroundColor={color}>
        <Image src={BuildingIcon} alt={BuildingIcon} />
      </Icon>
      <div className="flex flex-column align-items-center ml-1">
        <TableText fontSize={"20px"} isBold={true}>
          {name}
        </TableText>
        <div className="w-full text-left mt-1">
          <TableText fontSize={"16px"} fontWeight={500}>
            {quantity}
          </TableText>
        </div>
      </div>
    </Item>
  );
}
interface IconProps {
  $backgroundColor: string;
}
const Icon = styled.div<IconProps>`
  background: #${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 100%;
  > img {
    width: 20px;
    height: 20px;
    margin: auto;
  }
`;

const Item = styled.div`
  display: flex;
  background: #fff;
  padding: 18px 20px;
  border-radius: 10px;
  gap: 15px;
  border-radius: 10px;
`;
