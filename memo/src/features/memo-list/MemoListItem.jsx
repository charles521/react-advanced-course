import { ListItem, ListItemText, Divider, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function MemoListItem({ memoItem, delMemo }) {
  const navigate = useNavigate();
  const content = memoItem.content;

  const truncateText = (text) => {
    // 检测是否包含中文字符或全数字
    const isChineseOrNumber =
      /[\u4e00-\u9fa5]/.test(text) || /^\d+$/.test(text);

    if (isChineseOrNumber) {
      return text.length > 40 ? `${text.slice(0, 40)}...` : text;
    } else {
      // 处理英文单词
      const words = text.split(/\s+/);
      return words.length > 10 ? `${words.slice(0, 10).join(" ")}...` : text;
    }
  };
  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={(event) => {
              event.stopPropagation();
              delMemo(memoItem.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
        onClick={() => navigate(`/memo/${memoItem.id}`)}
      >
        <ListItemText
          primary={memoItem.title}
          secondary={<>{truncateText(content)}</>}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}

export default MemoListItem;
