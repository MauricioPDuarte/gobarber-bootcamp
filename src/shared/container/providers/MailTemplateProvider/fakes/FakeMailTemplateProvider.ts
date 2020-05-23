import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IEmailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IEmailTemplateProvider {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
