import { Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";

export type ShareMenuProps = {
  address: string;
};
export const ShareMenu = ({ address }: ShareMenuProps): JSX.Element => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickProfile = () => {
    router.push(`/profile/${address}`);
  };

  return (
    <>
      <Button onClick={handleClick}>Share</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClickProfile}>View Profile</MenuItem>
        <MenuItem>Copy URL to Clipboard</MenuItem>
      </Menu>
    </>
  );
};

export default ShareMenu;
