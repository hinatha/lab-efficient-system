import { useCallback, useState } from "react";

// ファイル一覧に関するカスタムフック
const useFileList = () => {
  // ファイル一覧State
  const [files, setFiles] = useState();

  // ファイル追加ロジック
  //useCallbackでメモ化
  const addTodo = useCallback(
    (file) => {
      // State変更を正常に検知させるため新たな配列を生成
      const newFiles = [...files];
      // File boxの入力内容をファイル配列に追加
      newFiles.push(file);
      setFiles(newFiles);
      // 依存配列に忘れずにfilesを設定
    },
    [files]
  );

  // メモ削除ロジック
  const deleteTodo = useCallback(
    (index) => {
      // State変更を正常に検知させるため新たな配列を生成
      const newFiles = [...files];
      // メモ配列から該当の要素を削除
      newFiles.splice(index, 1);
      setFiles(newFiles);
    },
    [files]
  );

  return { files, addTodo, deleteTodo };
};

export default useFileList;
