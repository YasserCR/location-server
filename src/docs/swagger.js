const swaggerJsDoc = require('swagger-jsdoc')

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Location API',
        version: '1.0.0',
        description: 'A express API to manage locations with a Mongo database',
    },
    servers: [
        {
            url: 'https://theplaces.online/api',
        },
        {
            url: 'http://localhost:3000/api',
        },
    ],

    paths: {
        '/location': {
            post: {
                tags: ['Location'],
                description: 'Create a new location',
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/CreateLocation',
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'Location created successfully',
                    },
                },
            },

        },
        '/locations': {
            get: {
                tags: ['Location'],
                description: 'Get all locations',
                responses: {
                    '200': {
                        description: 'Locations retrieved successfully',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/GetLocations',
                                },
                            },
                        },
                    },
                },
            }

        },
        '/location/{id}': {
            get: {
                tags: ['Location'],
                description: 'Get a location by ID',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                        },
                    },
                ],
                responses: {
                    '200': {
                        description: 'Location retrieved successfully',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Location',
                                },
                            },
                        },
                    },
                    '404': {
                        description: 'Location not found',
                    },
                },
            },
            patch: {
                tags: ['Location'],
                description: 'Update a location by ID',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                        },
                    },
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/UpdateLocation',
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'Location updated successfully',
                    },
                    '404': {
                        description: 'Location not found',
                    },
                },
            },
            delete: {
                tags: ['Location'],
                description: 'Delete a location by ID',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'string',
                        },
                    },
                ],
                responses: {
                    '200': {
                        description: 'Location deleted successfully',
                    },
                    '404': {
                        description: 'Location not found',
                    },
                },
            }
        },
    },

    components: {
        schemas: {
            CreateLocation: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: 'Location name',
                        example: 'Coscomatepec',
                    },

                    coordinates: {
                        type: 'object',
                        properties: {
                            type: {
                                type: 'string',
                                description: 'Type of the coordinates',
                                example: 'Point'
                            },
                            coordinates: {
                                type: 'array',
                                items: {
                                    type: 'number'
                                },
                                description: 'Array of coordinates',
                                example: [18.894166666667, -96.934722222222]
                            }
                        },
                        description: 'Location coordinates'
                    }
                },
                required: ['name', 'coordinates']
            },
            Location: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: 'Location name',
                        example: 'Coscomatepec',
                    },

                    coordinates: {
                        type: 'object',
                        properties: {
                            type: {
                                type: 'string',
                                description: 'Type of the coordinates',
                                example: 'Point'
                            },
                            coordinates: {
                                type: 'array',
                                items: {
                                    type: 'number'
                                },
                                description: 'Array of coordinates',
                                example: [18.894166666667, -96.934722222222]
                            }
                        },
                        description: 'Location coordinates'
                    },
                    _id: {
                        type: 'string',
                        description: 'Location id',
                        example: '5f5c3300e5e0c70017a9d8d1',
                    },
                    __v: {
                        type: 'number',
                        description: 'Location version',
                        example: 0,

                    }
                }
            },

            GetLocations: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/Location'
                }
            },

            UpdateLocation: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: 'Location name',
                        example: 'Coscomatepec',
                    },

                    coordinates: {
                        type: 'object',
                        properties: {
                            type: {
                                type: 'string',
                                description: 'Type of the coordinates',
                                example: 'Point'
                            },
                            coordinates: {
                                type: 'array',
                                items: {
                                    type: 'number'
                                },
                                description: 'Array of coordinates',
                                example: [18.894166666667, -96.934722222222]
                            }
                        },
                        description: 'Location coordinates'
                    }
                }

            }
        }
    }
}

const options = {
    swaggerDefinition,
    apis: ['./routers/*.js'],
}

const openApiConfig = swaggerJsDoc(options)

module.exports = openApiConfig