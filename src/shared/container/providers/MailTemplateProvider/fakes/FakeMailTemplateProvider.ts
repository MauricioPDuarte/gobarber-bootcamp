import IEmailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IEmailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
