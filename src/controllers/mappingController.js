import { saveMapping } from "../services/mappingService.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";
import { MESSAGES } from "../constants/messages.js";

export const saveMappingController = async (req, res) => {
  const { email, site, gesture, action, points } = req.body;

  if (!email || !site || !gesture || !action) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ message: MESSAGES.INVALID_REQUEST });
  }

  try {
    await saveMapping({ email, site, gesture, action, points });

    res.status(HTTP_STATUS.CREATED).json({
      message: MESSAGES.SAVE_MAPPING_SUCCESS,
    });
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: MESSAGES.SAVE_MAPPING_FAIL,
    });
  }
};
