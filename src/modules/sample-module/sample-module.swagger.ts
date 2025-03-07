/**
 * @swagger
 * tags:
 *   name: sampleModule
 *   description: SampleModule management endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SampleModule:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         uuid:
 *           type: string
 *           format: uuid
 *           description: SampleModule UUID (auto-generated if not provided)
 *       example:
 *         name: "test"
 *
 *     SampleModuleResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indicates if the operation was successful
 *         data:
 *           $ref: '#/components/schemas/SampleModule'
 *       example:
 *         success: true
 *         data:
 *           uuid: "123e4567-e89b-12d3-a456-426614174000"
 *
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indicates if the operation was successful
 *         error:
 *           type: string
 *           description: Error message
 *       example:
 *         success: false
 *         error: "Resource not found."
 */

/**
 * @swagger
 * /sample-module:
 *   post:
 *     summary: Create a new sampleModule
 *     tags: [sampleModule]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SampleModule'
 *     responses:
 *       200:
 *         description: SampleModule created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SampleModuleResponse'
 *       400:
 *         description: Invalid request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:`
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *   put:
 *     summary: Update an existing sampleModule
 *     tags: [sampleModule]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SampleModule'
 *     responses:
 *       200:
 *         description: SampleModule updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SampleModuleResponse'
 *       400:
 *         description: Invalid request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *   get:
 *     summary: Get all sampleModule
 *     tags: [sampleModule]
 *     responses:
 *       200:
 *         description: List of all sampleModule
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/SampleModule'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /sample-module/{uuid}:
 *   get:
 *     summary: Get a sampleModule by UUID
 *     tags: [sampleModule]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: SampleModule UUID
 *     responses:
 *       200:
 *         description: SampleModule details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SampleModuleResponse'
 *       404:
 *         description: SampleModule not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *   delete:
 *     summary: Delete a sampleModule
 *     tags: [sampleModule]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: SampleModule UUID
 *     responses:
 *       200:
 *         description: SampleModule deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: SampleModule not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */