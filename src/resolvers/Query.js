async function feed(parent, args, context, info) {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter },
    ],
  } : {}

  const links = await context.prisma.links({
    first: args.first,
    orderBy: args.orderBy,
    skip: args.skip,
    where,
  })

  const count = await context.prisma.linksConnection({
    where,
  })
  .aggregate()
  .count()

  return {
    links,
    count,
  }
}

module.exports = {
  feed,
}
