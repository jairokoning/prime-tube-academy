export default class Tag {
  private constructor(
    readonly tagId: string,
    readonly label: string,
  ) {
    this.tagId = tagId;
    this.label = label;
  }

  static create(label: string) {
    const tagId = crypto.randomUUID();
    return new Tag(tagId, label);
  }
}
