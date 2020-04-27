const { uuid, isUuid } = require("uuidv4");

const repositories = [];

module.exports = {
  async index(request, response) {
    return response.json(repositories);
  },

  async create(request, response) {
    const {title, url, techs} = request.body;

    const repositorie = {
      id: uuid(),
      title,
      url,
      techs,
      likes: 0
    };

    repositories.push(repositorie);

    return response.json(repositorie);
  },

  async update(request, response) {
    const { id } = request.params;
    const repositorieIndex = repositories.findIndex((repositorie) => repositorie.id === id);

    if (repositorieIndex < 0) {
      return response.status(400);
    }

    const {title, url, techs} = request.body;
    
    const { likes } = repositories.find(repositorie => repositorie.id === id);

    const repositorie = {
      id,
      title,
      url,
      techs,
      likes
    };

    repositories[repositorieIndex] = repositorie;

    return response.json(repositorie);
  },

  async delete(request, response) {
    const { id } = request.params;
    const repositorieIndex = repositories.findIndex((repositorie) => repositorie.id === id);

    if (repositorieIndex < 0) {
      return response.status(400);
    }

    repositories.splice(repositorieIndex, 1);

    return response.status(204).send();
  },

  async addLike(request, response) {
    const { id } = request.params;
    const repositorieIndex = repositories.findIndex((repositorie) => repositorie.id === id);

    if (repositorieIndex < 0) {
      return response.status(400);
    }

    repositories[repositorieIndex].likes++;
    
    repositorie = repositories[repositorieIndex];

    return response.json(repositorie);
  }

}