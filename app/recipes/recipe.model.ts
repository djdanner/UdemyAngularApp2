// Recipe Class Definition
// He calls this a model.
export class Recipe{
  public name: String;
  public description: String;
  public imagePath: String;

  constructor(
    Name: String,
    Description: String,
    ImagePath: String,
  ){
      this.name = Name;
      this.description = Description;
      this.imagePath = ImagePath;
  }
}
