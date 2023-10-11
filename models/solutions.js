module.exports = {
  name: 'solutions',
  schema: {
    externalId: {
      type: String,
      index: true,
      unique: true,
    },
    isReusable: {
      type: Boolean,
      index: false,
    },
    name: {
      type: String,
      index: true,
    },
    description: String,
    author: String,
    parentSolutionId: 'ObjectId',
    resourceType: Array,
    language: Array,
    keywords: Array,
    concepts: Array,
    createdFor: {
      type: Array,
    },
    scoringSystem: String,
    levelToScoreMapping: Object,
    themes: Array,
    flattenedThemes: Array,
    questionSequenceByEcm: Object,
    entityTypeId: 'ObjectId',
    entityType: String,
    type: {
      type: String,
      required: false,
      index: true,
    },
    subType: {
      type: String,
      required: false,
      index: true,
    },
    entities: Array,
    entityProfileFieldsPerEntityTypes: Object,
    startDate: Date,
    endDate: Date,
    status: {
      type: String,
      index: true,
    },
    evidenceMethods: Object,
    sections: Object,
    registry: Array,
    frameworkId: 'ObjectId',
    frameworkExternalId: String,
    parentSolutionId: 'ObjectId',
    noOfRatingLevels: Number,
    isRubricDriven: { type: Boolean, default: false },
    enableQuestionReadOut: { type: Boolean, default: false },
    isReusable: Boolean,
    roles: Object,
    observationMetaFormKey: String,
    updatedBy: String,
    captureGpsLocationAtQuestionLevel: { type: Boolean, default: false },
    sendSubmissionRatingEmailsTo: String,
    creator: String,
    linkTitle: String,
    linkUrl: String,
    isAPrivateProgram: {
      default: false,
      type: Boolean,
    },
    assessmentMetaFormKey: String,
    allowMultipleAssessemts: {
      default: false,
      type: Boolean,
    },
    isDeleted: {
      default: false,
      type: Boolean,
    },
    rootOrganisations: {
      type: [String],
      default: [],
    },
    link: {
      type: String,
      index: true,
    },
    referenceFrom: String,
    scope: {
      type: Object,
      default: {
        falg: true,
      },
    },
    pageHeading: {
      default: 'Domains',
      type: String,
    },
    criteriaLevelReport: {
      default: false,
      type: Boolean,
    },
  },
};
