import Api from '~/api'

export default (ctx, inject) => {
  const api = new Api(ctx.app.$axios)
  inject('api', api)
}
