import React from "react";
import { TableText } from "src/components/core/text";
import styled from "styled-components";
import Image from "next/image";
import { BoxButton } from "src/components/core/button/box-button";
export default function DashboardItemDetail() {
  return (
    <div>
      {[1, 2, 3, 4].map((item, i) => (
        <ItemDetail key={i}>
          <div className="mb-3">
            <div className="flex align-items-center justify-content-between p-3 border-bottom-1 border-gray-300">
              <TableText fontSize={"16px"} isBold={true}>
                # 003900 MAYO INDUSTRIAL
              </TableText>
              <div className="pi pi-ellipsis-v"></div>
            </div>
            <div className="grid p-0 m-0 p-3">
              <div className="col-6 mb-3 p-0">
                <div>
                  <div className="mb-2">
                    <TableText
                      fontSize={"12px"}
                      fontWeight={500}
                      color="#637381"
                    >
                      Group
                    </TableText>
                  </div>
                </div>
                <TableText fontSize={"14px"} fontWeight={500}>
                  Industrial Distributor
                </TableText>
              </div>
              <div className="col-6 mb-3 p-0">
                <div>
                  <div className="mb-2">
                    <TableText
                      fontSize={"12px"}
                      fontWeight={500}
                      color="#637381"
                    >
                      City
                    </TableText>
                  </div>
                </div>
                <TableText fontSize={"14px"} fontWeight={500}>
                  City name
                </TableText>
              </div>
              <div className="col-6 p-0">
                <div>
                  <div className="mb-2">
                    <TableText
                      fontSize={"12px"}
                      fontWeight={500}
                      color="#637381"
                    >
                      Zone
                    </TableText>
                  </div>
                </div>
                <TableText fontSize={"14px"} fontWeight={500}>
                  CC5929A
                </TableText>
              </div>
              <div className="col-6 p-0">
                <div>
                  <div className="mb-2">
                    <TableText
                      fontSize={"12px"}
                      fontWeight={500}
                      color="#637381"
                    >
                      Last Activity
                    </TableText>
                  </div>
                </div>
                <TableText fontSize={"14px"} fontWeight={500}>
                  11 Aug, 2023
                </TableText>
              </div>
            </div>
            <div className="p-3">
              <BoxButton
                label="View"
                boxColor="yellow"
                style={{ width: "100%" }}
                isRounded
                isOnlyShowBorder={i === 0 ? false : true}
              />
            </div>
          </div>
        </ItemDetail>
      ))}
    </div>
  );
}
const ItemDetail = styled.div`
  background: #fff;
  border-radius: 10px;
`;
