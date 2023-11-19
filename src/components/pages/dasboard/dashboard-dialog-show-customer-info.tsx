import React from "react";
import { Dialog } from "primereact/dialog";
import { TableText } from "src/components/core/text";
import styled from "styled-components";
import ProfileTick from "public/icons/profile-tick.svg";
import BuildingIcon from "public/icons/building-icon-3.svg";
import UserAddIcon from "public/icons/user-add-icon.svg"
import MessageEditIcon from "public/icons/message-edit-icon.svg"
import Image from "next/image";
import { Dropdown } from "primereact/dropdown";
interface DashboardDialogShowCustomerInfoProps {
  isOpen?: boolean
  onClose: () => void
}
export default function DashboardDialogShowCustomerInfo(
  props: DashboardDialogShowCustomerInfoProps
) {
  const { onClose, isOpen } = props;
  return (
    <Dialog
      header="Customer Details"
      className="w-full h-full"
      contentClassName="p-0"
      visible={isOpen}
      onHide={() => onClose()}
    >
      <div className="mt-3 border-bottom-1 border-gray-300 px-4 pb-4">
        <TableText fontSize={"22px"} isBold>
          Details
        </TableText>
        <div className="mt-4  ">
          <div className="mt-3 flex align-items-center">
            <Icon>
              <div className="pi pi-user"></div>
            </Icon>
            <div className="ml-4">
              <TableText fontSize={"16px"} isBold color="#333A45">
                C00085B
              </TableText>
            </div>
          </div>
          <div className="mt-3 flex align-items-center">
            <Icon>
              <div className="pi pi-user-edit"></div>
            </Icon>
            <div className="ml-4">
              <TableText fontSize={"16px"} isBold color="#333A45">
                A-1 AUTO SUPPLIES (2018 ) LTD.
              </TableText>
            </div>
          </div>
          <div className="mt-3 flex align-items-center">
            <Icon>
              <Image src={ProfileTick} alt={ProfileTick} />
            </Icon>
            <div className="ml-4">
              <TableText fontSize={"16px"} isBold color="#333A45">
                CHARLES BABIN
              </TableText>
            </div>
          </div>
          <div className="mt-3 flex align-items-center">
            <Icon>
              <div className="pi pi-users"></div>
            </Icon>
            <div className="ml-4">
              <TableText fontSize={"16px"} isBold color="#333A45">
                Customers
              </TableText>
            </div>
          </div>
          <div className="mt-3 flex align-items-center">
            <Icon>
              <div className="pi pi-user"></div>
            </Icon>
            <div className="ml-4">
              <TableText fontSize={"16px"} isBold color="#333A45">
                Auto / Industrial
              </TableText>
            </div>
          </div>
          <div className="mt-3 flex align-items-center">
            <Icon>
              <div className="pi pi-dollar"></div>
            </Icon>
            <div className="ml-4">
              <TableText fontSize={"16px"} isBold color="#333A45">
                IT-4
              </TableText>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="border-bottom-1 border-gray-300 mb-3 p-4">
          <TableText color="#020B18" fontSize={"24px"} isBold>
            Address
          </TableText>
          <div className="mt-3 flex">
            <Icon>
              <Image src={BuildingIcon} alt={BuildingIcon} />
            </Icon>
            <div className="w-8 ml-4 line-height-3">
              <TableText color="#333A45" fontSize={"16px"} isBold>
                A-1 AUTO SUPPLIES (2018 ) LTD. 241 MAIN STREET CHIPMAN, NB
              </TableText>
            </div>
          </div>
        </div>
        <div className="border-bottom-1 border-gray-300 mb-3 p-4">
          <TableText color="#020B18" fontSize={"24px"} isBold>
            Primary contact
          </TableText>
          <div className="mt-3 flex">
            <Icon>
              <Image src={BuildingIcon} alt={BuildingIcon} />
            </Icon>
            <div className="w-8 ml-4 line-height-3" style={{wordBreak: 'break-word'}}>
              <TableText color="#333A45" fontSize={"16px"} isBold>
                PAUL MCKENELLEV PMCKENELLEY@NAPACANADA.COM 
              </TableText>
            </div>
          </div>
        </div>
        <div className=" mb-3 p-4">
          <TableText color="#020B18" fontSize={"24px"} isBold>
          Contact Persons
          </TableText>
          <div className="mt-3">
            <Dropdown placeholder="All addresses" className="w-full border-none bg-gray-100" />
          </div>
          <div className="mt-3 flex justify-content-between">
            <Icon>
              <Image src={UserAddIcon} alt={UserAddIcon} />
            </Icon>
            <div className=" ml-4 line-height-3">
              <TableText color="#333A45" fontSize={"16px"} isBold>
              PAUL MCKENELLEV
              </TableText>
              <div className="mt-3">
                <TableText fontSize={'14px'} fontWeight={500}>1-506-339-6642</TableText>
                <TableText fontSize={'14px'} fontWeight={500}>PMCKENELLEY@NAPACANADA.COM</TableText>
              </div>
            </div>
            <Image src={MessageEditIcon} alt={MessageEditIcon} />
          </div>
          <div className="mt-3 flex justify-content-between">
            <Icon>
              <Image src={UserAddIcon} alt={UserAddIcon} />
            </Icon>
            <div className=" ml-4 line-height-3">
              <TableText color="#333A45" fontSize={"16px"} isBold>
              PAUL MCKENELLEV
              </TableText>
              <div className="mt-3">
                <TableText fontSize={'14px'} fontWeight={500} color="#333A45">1-506-339-6642</TableText>
                <TableText fontSize={'14px'} fontWeight={500} color="#333A45">PMCKENELLEY@NAPACANADA.COM</TableText>
              </div>
            </div>
            <Image src={MessageEditIcon} alt={MessageEditIcon} />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
const Icon = styled.div`
  padding: 8px;
  background-color: #f6f6fa;
  border-radius: 40px;
  opacity: 0.8;
  width: 34px;
  height: 34px;
`;
