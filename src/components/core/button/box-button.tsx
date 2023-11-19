import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  MotionProps,
} from "framer-motion";
import {
  horizontalPadding,
  intToPadding,
  verticalPadding,
} from "libs/shared/utils/styled";
import React from "react";
import styled from "styled-components";

type BoxButtonColor =
  | "black"
  | "light"
  | "error"
  | "blue"
  | "gray-border"
  | "light-green-border"
  | "light-blue"
  | "border-blue"
  | "delete"
  | "white"
  | "blue"
  | "yellow"
  | 'bg-gray'

type BoxButtonProps = React.PropsWithChildren<
  HTMLMotionProps<"button"> & {
    label?: React.ReactNode;
    boxColor?: BoxButtonColor;
    isLabelOnRight?: boolean;
    isRounded?: boolean;
    isWide?: boolean;
    isSmall?: boolean;
    isTiny?: boolean;
    isSmaller?: boolean;
    isLoading?: boolean;
    hideHoverTransition?: boolean;
    borderRadius?: number;
    isOnlyShowBorder?: boolean;
  }
>;

export const BoxButton: React.FC<BoxButtonProps> = ({
  label,
  boxColor = "black",
  isLabelOnRight = false,
  isRounded = false,
  isWide = false,
  isSmall = false,
  isSmaller = false,
  isTiny = false,
  isLoading = false,
  hideHoverTransition = false,
  onClick,
  children,
  borderRadius,
  isOnlyShowBorder,
  ...props
}) => {
  return (
    <Button
      {...props}
      onClick={isLoading ? undefined : onClick}
      $isLabelOnRight={isLabelOnRight}
      $isWide={isWide}
      $isSmall={isSmall}
      $isSmaller={isSmaller}
      $isTiny={isTiny}
      $boxColor={props.disabled ? "gray-border" : boxColor}
      $isOnlyShowBorder={isOnlyShowBorder}
    >
      {label && (
        <Label
          $isLoading={isLoading}
          $isSmall={isSmall}
          $isSmaller={isSmaller}
          $isTiny={isTiny}
        >
          {label}
        </Label>
      )}

      {React.Children.count(children) > 0 && (
        <IconContainer>{children}</IconContainer>
      )}

      <Shade
        $isRounded={isRounded}
        $isWide={isWide}
        $isSmaller={isSmaller}
        $hideHoverTransition={hideHoverTransition}
        $borderRadius={borderRadius}
        $isOnlyShowBorder={isOnlyShowBorder}
      />

      <AnimatePresence>
        {isLoading && (
          <LoaderContainer key="loader">
            <Loader $boxColor={boxColor} />
          </LoaderContainer>
        )}
      </AnimatePresence>
    </Button>
  );
};

BoxButton.displayName = "BoxButton";

interface LabelProps {
  $isSmaller: boolean;
  $isLoading: boolean;
  $isSmall: boolean;
  $isTiny: boolean;
}

const Label = styled.span<LabelProps>`
  font-family: var(--font-family-narrow);
  position: relative;
  z-index: 2;
  font-size: ${({ $isSmaller, $isSmall, $isTiny }) =>
    $isTiny
      ? "0.75rem"
      : $isSmaller
      ? "0.8rem"
      : $isSmall
      ? "0.85rem"
      : "0.925rem"};
  font-weight: 400;
  line-height: 1;
  color: white;
  opacity: ${({ $isLoading }) => ($isLoading ? "0.8" : "1")};
  transition: 300ms opacity 0ms ease -in -out;
`;

interface ShadeProps {
  $isWide: boolean;
  $isSmaller: boolean;
  $isRounded: boolean;
  $hideHoverTransition: boolean;
  $borderRadius?: number;
  $isOnlyShowBorder?: boolean;
}

const Shade = styled(motion.div).attrs(
  (s: any): MotionProps => ({
    variants: {
      idle: {
        scaleX: 1,
        scaleY: 1,
        transition: {
          type: "spring",
          stiffness: 60,
          damping: 10,
          bounce: 20,
        },
      },
      hover: s.$hideHoverTransition
        ? {}
        : {
            scaleX: 1.1,
            scaleY: 1.2,
            transition: {
              type: "spring",
              stiffness: 240,
              dampign: 10,
              bounce: 0,
            },
          },
    },
  })
)<ShadeProps>`
  z-index: 1;
  position: absolute;
  box-sizing: content-box;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0rem;
  background: var(--gray-900);
  border: 1px solid var(--gray-900);
  border-radius: ${({ $isRounded, $borderRadius }) =>
    $borderRadius
      ? `${$borderRadius}px`
      : $isRounded
      ? "999px"
      : intToPadding(1)};
  transform-origin: center;
`;

const LoaderContainer = styled(motion.span).attrs(
  (): MotionProps => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  })
)`
  position: absolute;
  display: block;
  overflow: hidden;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

interface LoaderProps {
  $boxColor: BoxButtonColor;
  $isOnlyShowBorder?: boolean;
}

const Loader = styled(motion.span).attrs(
  (): MotionProps => ({
    animate: { left: "100%" },
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1,
      repeatDelay: 0,
      repeatType: "reverse",
      repeat: Infinity,
    },
  })
)<LoaderProps>`
  position: absolute;
  display: block;
  top: 0;
  left: 0%;
  width: ${intToPadding(8)};
  height: 100%;
  transform: skew(-30deg);
  transform-origin: top;
  background-color: ${({ $boxColor }) =>
    $boxColor === "light"
      ? "rgba(99, 102, 241, 0.08)"
      : $boxColor === "blue"
      ? "var(--blue-color)"
      : $boxColor === "light-blue"
      ? "rgba(99, 102, 241, 0.08)"
      : $boxColor === "error"
      ? "rgba(237, 28, 36, 0.08)"
      : "rgba(255, 255, 255, 0.3)"};
`;

interface ButtonProps {
  $isLabelOnRight: boolean;
  $isWide: boolean;
  $isSmall: boolean;
  $isSmaller: boolean;
  $isTiny: boolean;
  $boxColor: BoxButtonColor;
  $isOnlyShowBorder?: boolean;
}

const Button = styled(motion.button).attrs(
  (): MotionProps => ({
    initial: false,
    animate: "idle",
    whileHover: "hover",
    whileTap: "hover tap",
  })
)<ButtonProps>`
  cursor: ${({ disabled }) => (!disabled ? undefined : "pointer")};
  position: relative;
  z-index: 1;
  flex-direction: ${({ $isLabelOnRight }) =>
    $isLabelOnRight ? "row-reverse" : "row"};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: none;
  gap: ${intToPadding(2)};

  ${({ $isSmaller, $isSmall, $isTiny }) =>
    verticalPadding($isTiny ? 1 : $isSmaller ? 2 : $isSmall ? 2.5 : 3)};

  ${({ $isWide, $isSmaller, $isSmall, $isTiny }) =>
    horizontalPadding(
      $isWide
        ? $isSmaller || $isSmall
          ? 10
          : 12
        : $isTiny
        ? 2
        : $isSmaller || $isSmall
        ? 4
        : 6
    )};

  ${({ $boxColor, $isOnlyShowBorder }) =>
  ($boxColor === "bg-gray" &&
      `
			& ${Label} {
				color: #000000;
			}

			& ${Shade} {
				background: #F6F6FA;
        border: none
				
			}
		`) ||
    ($boxColor === "yellow" &&
      `
			& ${Label} {
				color: #000000;
			}

			& ${Shade} {
				background: #FFD902;
                ${
                  $isOnlyShowBorder
                    ? `border-color: #FFD902;
                        background: #FFF;
                        `
                    : "border-color:#FFF; box-shadow: 0 ${intToPadding(0.5)} ${intToPadding(1.5)} rgba(33, 33, 33, 0.08);"
                }
				
			}
		`) ||
    ($boxColor === "light" &&
      `
			& ${Label} {
				color: var(--accent-color);
			}

			& ${Shade} {
				background: var(--surface-a);
				border-color: var(--light-blue-color);
				box-shadow: 0 ${intToPadding(0.5)} ${intToPadding(1.5)} rgba(33, 33, 33, 0.08);
			}
		`) ||
    ($boxColor === "light-green-border" &&
      `
			& ${Label} {
				color: var(--green-color-text);
			}

			& ${Shade} {
				background: var(--surface-a);
				border-color: var(--very-light-green-color);
				box-shadow: 0 ${intToPadding(0.5)} ${intToPadding(1.5)} rgba(33, 33, 33, 0.08);
			}
		`) ||
    ($boxColor === "light-blue" &&
      `
			& ${Label} {
				color: var(--blue-color);
			}

			& ${Shade} {
				background: rgba(15, 134, 221, 0.1);
				border-color: rgba(15, 134, 221, 0.1);
				box-shadow: 0 ${intToPadding(0.5)} ${intToPadding(1.5)} rgba(33, 33, 33, 0.08);
			}
		`) ||
    ($boxColor === "error" &&
      `
			& ${Label} {
				color: var(--primary-color);
			}

			& ${Shade} {
				background: var(--surface-a);
				border-color: var(--secondary-color);
				box-shadow: 0 ${intToPadding(0.5)} ${intToPadding(1.5)} rgba(33, 33, 33, 0.12);
			}
		`) ||
    ($boxColor === "blue" &&
      `
			& ${Label} {
				color: white;
			}

			&:hover ${Label}{
				color: var(--blue-color);
			}

			& ${Shade} {
				background: var(--blue-color);
				border-color: transparent;
			}

			&:hover ${Shade} {
				background: var(--blue-color-light);
				border-color: var(--blue-color);
			}
		`) ||
    ($boxColor === "light-blue" &&
      `
			& ${Label} {
				color: var(--blue-color);
			}

			&:hover ${Label}{
				color: white;
			}

			& ${Shade} {
				background: var(--blue-color-light);
				border-color: var(--blue-color);
			}

			&:hover ${Shade} {
				background: var(--blue-color);
			}
		`) ||
    ($boxColor === "border-blue" &&
      `
			& ${Label} {
				color: var(--blue-color);
			}

			&:hover ${Label}{
				color: white;
			}

			& ${Shade} {
				background: transparent;
				border-color: var(--blue-color);
			}

			&:hover ${Shade} {
				background: var(--blue-color);
			}
		`) ||
    ($boxColor === "delete" &&
      `
			& ${Label} {
				color: rgba(232, 41, 41, 1);
			}

			&:hover ${Label}{
				color: white;
			}

			& ${Shade} {
				background:  rgba(232, 41, 41, 0.1);
				border-color: transparent;
			}

			&:hover ${Shade} {
				background: rgba(232, 41, 41, 1);
			}
		`) ||
    ($boxColor === "white" &&
      `
			& ${Label} {
				color: var(--blue-01);
			}

			& ${Shade} {
				background:  #FFFFFF;
				border-color: transparent;
			}

			&:hover ${Shade} {
				background: var(--blue-01-light);
			}
		`) ||
    ($boxColor === "gray-border" &&
      `
			& ${Label} {
				color: var(--gray-500);
			}

			& ${Shade} {
				background: var(--surface-a);
				border-color: var(--surface-300);
				box-shadow: 0 ${intToPadding(0.5)} ${intToPadding(1.5)} rgba(33, 33, 33, 0.04);
			}
		`)}
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
