const massage = require('../../lib/config/massage.js');

describe('config/massage', () => {
  describe('massageConfig', () => {
    it('returns empty', () => {
      const config = {};
      const res = massage.massageConfig(config);
      expect(res).toMatchSnapshot();
    });
    it('massages strings to array', () => {
      const config = {
        schedule: 'before 5am',
      };
      const res = massage.massageConfig(config);
      expect(Array.isArray(res.schedule)).toBe(true);
    });
    it('massages npmToken', () => {
      const config = {
        npmToken: 'some-token',
      };
      expect(massage.massageConfig(config)).toMatchSnapshot();
    });
  });
});
