declare module "fluent-schema" {

  function FluentSchema(opt?:SchemaOptions): FluentSchema

  interface SchemaOptions {
    schema: object,
    generateIds: boolean
  }

  interface FluentSchema {
    prop: (name: string, props?: object) => FluentSchema
  }

  export { FluentSchema };
}
