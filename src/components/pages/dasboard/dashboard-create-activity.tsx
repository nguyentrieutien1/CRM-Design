import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import { BoxButton } from "src/components/core/button/box-button";
import { TableText } from "src/components/core/text";
import OclockIcon from "public/icons/oclock-icon.svg";
import SecurityUserIcon from "public/icons/security-user-icon.svg";
import DocumentTextIcon from "public/icons/document-text-icon.svg";
import styled from "styled-components";
import Image from "next/image";

interface DashboardCreateActivityProps {
  OnOpenDialogCreateActivity: () => void;
  setMode: () => void;
}
export default function DashboardCreateActivity(
  props: DashboardCreateActivityProps
) {
  const { OnOpenDialogCreateActivity, setMode } = props;
  const [tabIndex, setTabIndex] = useState<number>(0);

  const tabs = ["Activities", "Quote Request", "Notes", "BP files"];
  return (
    <Container>
      <div className="grid">
        <div className="col-10">
          <BoxButton
            borderRadius={10}
            style={{ width: "100%" }}
            boxColor="yellow"
            isOnlyShowBorder={true}
            onClick={() => OnOpenDialogCreateActivity()}
          >
            <div className="flex align-items-center">
              <div className="mr-2">
                <TableText>+</TableText>
              </div>
              <div className="">
                <TableText isBold>Create New Activity</TableText>
              </div>
            </div>
          </BoxButton>
        </div>
        <div className="col-2">
          <BoxButton
            borderRadius={10}
            style={{ width: "100%" }}
            boxColor="yellow"
            isOnlyShowBorder={true}
          >
            <div className="pi pi-exclamation-circle"></div>
          </BoxButton>
        </div>
      </div>
      <div className="flex align-items-center bg-white p-1 border-round-lg mt-2">
        {tabs.map((tabName, i) => (
          <Tab
            key={i}
            className={`border-round-lg ${i === tabIndex ? "bg-gray-100" : ""}`}
            onClick={() => setTabIndex(i)}
          >
            <TableText fontSize={"11px"} fontWeight={500}>
              {tabName}
            </TableText>
          </Tab>
        ))}
      </div>
      <div className="mt-3 bg-white border-round-lg">
        <div className="p-3">
          <TableText fontSize={"15px"} isBold>
            A-1 AUTO SUPPLIES (2018 ) LTD.
          </TableText>
        </div>
        <div className="px-4">
          <Dropdown
            placeholder="All"
            className="w-full bg-gray-100 border-none"
          />
          <div className="bg-gray-100 border-round-lg mt-4 p-4">
            <BoxButton
              borderRadius={10}
              style={{ width: "100%" }}
              boxColor="yellow"
              isOnlyShowBorder={true}
              onClick={() => OnOpenDialogCreateActivity()}
            >
              <div className="flex align-items-center">
                <div className="mr-2">
                  <TableText>+</TableText>
                </div>
                <div className="">
                  <TableText isBold>Create New Activity</TableText>
                </div>
              </div>
            </BoxButton>
            <div className="mt-3">
              {[1, 2, 3].map((item, i) => (
                <ActiveItem
                  key={i}
                  className="mb-3 bg-white  border-1  border-gray-300   border-round-lg"
                  $isExpiryDate={i === 0 ? true : false}
                  onClick={() => setMode()}
                >
                  <ActiveItemHeder
                    className="flex align-items-center justify-content-between p-3 border-round-top-lg "
                    $isExpiryDate={i === 0 ? true : false}
                  >
                    <div>
                      <TableText fontSize={"16px"} isBold>
                        CALL
                      </TableText>
                      <div className="flex align-items-center mt-1">
                        <Image src={OclockIcon} alt={OclockIcon} />
                        <div className="ml-1">
                          <TableText fontSize={"12px"}>
                            Aug 12, 12:35pm
                          </TableText>
                        </div>
                      </div>
                    </div>
                    {i % 2 === 0 && (
                      <Image src={SecurityUserIcon} alt={SecurityUserIcon} />
                    )}
                  </ActiveItemHeder>

                  <div className="flex px-3 py-4 line-height-3">
                    <Image src={DocumentTextIcon} alt={DocumentTextIcon} />
                    <div className="ml-2 w-9">
                      <TableText fontSize={"12px"}>
                        Spoke to Anne. Business is slow but things with us are
                        fine. Expects things to pick up shortly when logging
                        picks up.
                      </TableText>
                    </div>
                  </div>
                </ActiveItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
const ActiveItemHeder = styled.div<ActiveItemProps>`
  background-color: ${({ $isExpiryDate }) =>
    $isExpiryDate ? "#FEECEC" : "#F6F6FA"};
`;
interface ActiveItemProps {
  $isExpiryDate: boolean;
}
const ActiveItem = styled.div<ActiveItemProps>`
  border-color: ${({ $isExpiryDate }) => $isExpiryDate && "#F34343"} !important;
`;
const Container = styled.div``;
const Tab = styled.div`
  display: flex;
  padding: 7px 17px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  > p {
    white-space: nowrap;
  }
`;
