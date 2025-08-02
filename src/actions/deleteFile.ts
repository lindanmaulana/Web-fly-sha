import supabase from "@/lib/supabase";
import { errorHandler } from "@/lib/utils/errorHandler";

export const deleteFile = async (bucketName: string, pathFile: string) => {
  try {
    const result = await supabase.storage.from(bucketName).remove([pathFile]);

    if (result.error) throw new Error(result.error.message);

    return result;
  } catch (err) {
    const errorMessage = errorHandler(err);

    throw new Error(errorMessage);
  }
};
