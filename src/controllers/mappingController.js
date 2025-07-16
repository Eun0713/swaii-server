import {
  saveMapping,
  getMappingsByEmail,
  deleteMapping,
  updateMapping,
} from "../services/mappingService.js";
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

export const getMappingsController = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ message: MESSAGES.INVALID_REQUEST });
  }

  try {
    const mappings = await getMappingsByEmail(email);
    res
      .status(HTTP_STATUS.OK)
      .json({ message: MESSAGES.MAPPING_FETCH_SUCCESS, data: mappings });
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.MAPPING_FETCH_FAIL });
  }
};

export const deleteMappingController = async (req, res) => {
  const { email, site, gesture, action } = req.body;

  if (!email || !site || !gesture || !action) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ message: MESSAGES.INVALID_REQUEST });
  }

  try {
    await deleteMapping(email, site, gesture, action);
    res
      .status(HTTP_STATUS.OK)
      .json({ message: MESSAGES.MAPPING_DELETE_SUCCESS });
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.MAPPING_DELETE_FAIL });
  }
};

export const updateMappingController = async (req, res) => {
  const { email, site, gesture, action, updated } = req.body;

  if (!email || !site || !gesture || !action || !updated) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: MESSAGES.INVALID_REQUEST,
    });
  }

  try {
    await updateMapping({ email, site, gesture, action, updated });

    return res.status(HTTP_STATUS.OK).json({
      message: MESSAGES.MAPPING_UPDATE_SUCCESS,
    });
  } catch (error) {
    if (error.message === "GESTURE_NOT_FOUND") {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: MESSAGES.GESTURE_NOT_FOUND,
      });
    }

    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: MESSAGES.MAPPING_UPDATE_FAIL,
    });
  }
};
