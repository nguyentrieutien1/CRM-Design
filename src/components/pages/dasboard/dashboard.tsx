import React, { useState } from "react";
import { StyledAutocomplete } from "src/components/core/input/input-autocomplete";
import { Dropdown } from "primereact/dropdown";
import { TableText } from "src/components/core/text";
import styled from "styled-components";
import { StyledInputSwitch } from "src/components/core/input/styled-input-switch";
import DashboardItem from "./dashboard-item";
import DashboardItemDetail from "./dashboard-item-detail";
import DashboardCreateActivity from "./dashboard-create-activity";
import DashboardDialogCreateEditActivity from "./dashboard-dialog-create-edit-activity";
export interface ModeActivity {
  status: string;
}
export default function Dashboard() {
  const [checked, setChecked] = useState<boolean>(false);
  const [itemDetailId, setItemDetailId] = useState<number | null>();
  const [isOpenDialogCreateActivity, setIsOpenDialogCreateEditActivity] =
    useState<boolean>(false);
  const [mode, setMode] = useState<ModeActivity>({ status: "create" });

  const items = [
    {
      name: "Auto/Industrial",
      quantity: 198,
      color: "316AFF",
    },
    {
      name: "Auto Warehouse Dist.",
      quantity: 67,
      color: "38DB1D",
    },
    {
      name: "Gas Aftermarket",
      quantity: 213,
      color: "0FC06B",
    },
    {
      name: "Gas Contractor",
      quantity: 72,
      color: "D97832",
    },
    {
      name: "Gas OEM",
      quantity: 71,
      color: "31C4E0",
    },
    {
      name: "General OEM",
      quantity: 56,
      color: "316AFF",
    },

    {
      name: "Hydraulic Distributor",
      quantity: 56,
      color: "38DB1D",
    },
    {
      name: "Industrial Distributor",
      quantity: 56,
      color: "315D84",
    },
    {
      name: "Marine Distributor",
      quantity: 56,
      color: "316AFF",
    },
  ];
  return checked ? (
    <>
      <DashboardCreateActivity
        OnOpenDialogCreateActivity={() =>
          setIsOpenDialogCreateEditActivity(true)
        }
        setMode={() => {
          setIsOpenDialogCreateEditActivity(true);
          setMode({ status: "edit" });
        }}
      />
      <DashboardDialogCreateEditActivity
        mode={mode}
        isOpen={isOpenDialogCreateActivity}
        onClose={() => setIsOpenDialogCreateEditActivity(false)}
      />
    </>
  ) : (
    <>
      <div>
        <StyledAutocomplete

          isHiddenBorderIcon={true}
          prependSearchIcon
          inputClassName="border-none outline-none"
          placeholder="Type"
        />
        <div className="grid mt-3">
          <div className="col-6">
            <label htmlFor="group">
              <TableText color="#333A45">Group</TableText>
            </label>
            <StyledDropdown
              inputId="group"
              className="w-full mt-2"
              placeholder="All"
            />
          </div>
          <div className="col-6">
            <label htmlFor="industry">
              <TableText color="#333A45">Industry</TableText>
            </label>
            <StyledDropdown
              inputId="industry"
              className="w-full mt-2"
              placeholder="All"
            />
          </div>
          <div className="col-6">
            <label htmlFor="city">
              <TableText color="#333A45">City</TableText>
            </label>
            <StyledDropdown
              inputId="city"
              className="w-full mt-2"
              placeholder="All"
            />
          </div>
          <div className="col-6">
            <label htmlFor="zone">
              <TableText color="#333A45">Zone</TableText>
            </label>
            <StyledDropdown
              inputId="zone"
              className="w-full mt-2"
              placeholder="All"
            />
          </div>
        </div>
        <div className="flex align-items-center mt-2">
          <div className="mr-2">
            <TableText fontWeight={600}>New Activities</TableText>
          </div>
          <StyledInputSwitchCustom
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
            $backgroundColor={checked ? "#FFF" : "#316AFF"}
          />
        </div>
        <div className="mt-3">
          {itemDetailId || itemDetailId === 0 ? (
            <DashboardItemDetail />
          ) : (
            items.map((item, i) => (
              <div key={i}>
                <div onClick={() => setItemDetailId(i)}>
                  <DashboardItem item={item} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
const StyledDropdown = styled(Dropdown)`
  border: none !important;
  .p-dropdown-label {
    font-size: 14px !important;
    font-weight: 500 !important;
    color: #020B18 !important;
  }
`;

interface StyledInputSwitchCustomProps {
  $backgroundColor: string;
}
const StyledInputSwitchCustom = styled(
  StyledInputSwitch
)<StyledInputSwitchCustomProps>`
.p-inputswitch-slider {
  width: 80% !important;
  height: 80% !important;
}
  ::before {
    background-color: ${({ $backgroundColor }) => $backgroundColor} !important;
    left: 2px !important;
    
  }
`;
