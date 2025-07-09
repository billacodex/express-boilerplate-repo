import {Request, Response, Router} from "express";
import {
  ResponseType,
  sendErrorResponse,
  sendSuccessResponse,
} from "../../core/models/response/response.model";
import {SampleModuleController} from "./sample-module.controller";
import {validateRequest} from "../../core/middlewares/validate-request";
import {SampleModuleSchema} from "./dto/sample-module-request.dto";

const sampleModuleRouter = Router();

const sampleModuleController = new SampleModuleController();

sampleModuleRouter.post("/", validateRequest(SampleModuleSchema), async (req: Request, res: Response) => {
  try {
    const sampleModuleRequest = req.body;

    const payload = await sampleModuleController.createSampleModule(
      sampleModuleRequest,
    );

    return sendSuccessResponse({
      type: ResponseType.HTTP,
      statusCode: 200,
      payload: payload,
      res,
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error(error);
    return sendErrorResponse({
      type: ResponseType.HTTP,
      payload: err.message,
      res,
    });
  }
});

sampleModuleRouter.put("/", validateRequest(SampleModuleSchema), async (req: Request, res: Response) => {
  try {
    const sampleModuleRequest = req.body;

    const payload = await sampleModuleController.updateSampleModule(
      sampleModuleRequest,
    );

    return sendSuccessResponse({
      type: ResponseType.HTTP,
      statusCode: 200,
      payload: payload,
      res,
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error(error);
    return sendErrorResponse({
      type: ResponseType.HTTP,
      payload: err.message,
      res,
    });
  }
});

sampleModuleRouter.get("/", async (req: Request, res: Response) => {
  try {
    const payload = await sampleModuleController.getAll();

    return sendSuccessResponse({
      type: ResponseType.HTTP,
      statusCode: 200,
      payload: payload,
      res,
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error(err);
    return sendErrorResponse({
      type: ResponseType.HTTP,
      payload: err.message,
      res,
    });
  }
});

sampleModuleRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      throw new Error("id is required.");
    }

    const payload = await sampleModuleController.getOne(id);

    if (!payload) {
      throw new Error("Resource not found.");
    }

    return sendSuccessResponse({
      type: ResponseType.HTTP,
      statusCode: 200,
      payload: payload,
      res,
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error(err);
    return sendErrorResponse({
      type: ResponseType.HTTP,
      payload: err.message,
      res,
    });
  }
});


sampleModuleRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) throw new Error("id needed");
    await sampleModuleController.deleteSampleModule(id);

    return sendSuccessResponse({
      type: ResponseType.HTTP,
      statusCode: 200,
      payload: true,
      res,
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error(err);
    return sendErrorResponse({
      type: ResponseType.HTTP,
      payload: err.message,
      res,
    });
  }
});

export default sampleModuleRouter;
