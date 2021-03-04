# web-template

*web-template* (name to be determined) is a work-in-progress boilerplate for building new web applications.
## Abstract

While many frameworks like Rails exist, they often sacrifice long term maintainability for short term convenience. Overtime, applications built with these frameworks become difficult to maintain, and efforts to break them into smaller services can be equally daunting due to tangled dependencies. *web-template* hopes to become a new way to build web applications with longevity in mind, where applications can easily evolve to respond to new product and infrastructure. For example, applications built with this boilerplate should have the option to be deployed as few large deployments or multiple smaller units without significant change in code, so they can be deployed on to a single server or distributed across multiple nodes according to needs.

*web-template* hopes to do this by forcing concepts like separation of concern upfront, and leveraging proven technologies like gRPC and Next.js. The hope is also be transparent in the ideation and development process, with design decisions documented in [docs/design](./docs/design).
