import { RWebShare } from "react-web-share";
import { Button } from "./button";
import { Share1Icon } from "@radix-ui/react-icons";

const ShareButton = ({
  title,
  text,
  url,
}: {
  title: string;
  text: string;
  url: string;
}) => {
  return (
    <RWebShare
      data={{
        text: text,
        title: title,
        url: url,
      }}
    >
      <Button>
        Share <Share1Icon className="h-4 w-4 ml-2" />
      </Button>
    </RWebShare>
  );
};
export default ShareButton;
