import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import React from "react";
import { TableText } from "src/components/core/text";
import { Calendar } from "primereact/calendar";
import Image from "next/image";
import CalendarIcon from "public/icons/calendar-icon.svg";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import styled from "styled-components";
import { BoxButton } from "src/components/core/button/box-button";
import { ModeActivity } from "./dashboard";
interface DashboardDialogCreateActivityProps {
  isOpen: boolean;
  onClose: () => void;
  mode: ModeActivity;
}
export default function DashboardDialogCreateEditActivity(
  props: DashboardDialogCreateActivityProps
) {
  const { isOpen, onClose, mode } = props;
  return (
    <Dialog
      header={`${mode.status === "create" ? "Create" : "Edit"} Activity`}
      className="w-full h-full m-4"
      onHide={() => onClose()}
      visible={isOpen}
    >
      <div className="mt-3">
        <div className="mb-4">
          <TableText isBold color="#333A45">
            Type
          </TableText>
          <div className="mt-2">
            <StyledDropdown
              className="w-full border-none bg-gray-100 border-round-lg"
              placeholder="Choose type"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="due-date">
            <TableText isBold color="#333A45">
              Due Date
            </TableText>
            <div
              className="border-round-lg mt-2 bg-gray-100 border-1 border-gray-100 flex align-items-center justify-content-between"
              style={{ padding: "0px 15px" }}
            >
              <TableText fontSize={"16px"}>Choose due date</TableText>

              <div className="flex w-3 align-items-center h-1">
                <Calendar
                  inputId="due-date"
                  className="w-full opacity-0 "
                  inputClassName="border-none w-0"
                  placeholder="Choose type"
                />
                <Image src={CalendarIcon} alt={CalendarIcon} />
              </div>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <TableText isBold color="#333A45">
            Remind
          </TableText>
          <div className="mt-2 ">
            <StyledInputTextarea
              rows={4}
              className="w-full border-none bg-gray-100"
              placeholder="Choose time to remind"
            />
          </div>
        </div>
        <div className="mb-4">
          <TableText isBold color="#333A45">
            Select Address
          </TableText>
          <div className="mt-2">
            <StyledDropdown
              className="w-full border-none bg-gray-100"
              placeholder="All address"
            />
          </div>
        </div>
        <div className="mb-4">
          <TableText isBold color="#333A45">
            Assign To
          </TableText>
          <div className="mt-2">
            <StyledDropdown
              className="w-full border-none bg-gray-100"
              placeholder="Colin Anderson"
            />
          </div>
        </div>
        <div className="mb-4 flex align-items-center">
          <StyledCheckBox checked={false} />
          <div className="ml-3">
            <TableText fontSize={"16px"} color="#333A45">
              Make it private
            </TableText>
          </div>
        </div>
        <div className="mb-4 flex align-items-center justify-content-end">
          <BoxButton
            borderRadius={8}
            label="Cancel"
            boxColor="bg-gray"
            isSmall
            className="p-3"
          />
          <div className="ml-2">
            <BoxButton
              className="p-3"
              borderRadius={8}
              label="Create"
              boxColor="yellow"
              isSmall
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
const StyledInputTextarea = styled(InputTextarea)`
  &::placeholder {
    color: #020b18 !important;
    font-size: 16px !important;
  }
`;
const StyledDropdown = styled(Dropdown)`
  .p-dropdown-label {
    color: #020b18 !important;
    font-size: 16px !important;
  }
`;
const StyledCheckBox = styled(Checkbox)`
  .p-checkbox-box {
    border-color: #ffd902 !important;
  }
`;
