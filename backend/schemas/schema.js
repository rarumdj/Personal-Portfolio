// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import about from "./about";
import experiences from "./experiences";
import header from "./header";
import stacks from "./stacks";
import workExperience from "./workExperience";
import works from "./works";
import listWorks from "./listWorks";
import footer from "./footer";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    header,
    about,
    experiences,
    workExperience,
    stacks,
    works,
    listWorks,
    footer
  ]),
});
