# Tech Choices

Technologies and why we chose them.

## Frontend: Typescript

While most languages support some type of web framework, Javascript has by far the most mature support for Frontend development with its browser origins. The rich ecosystem means it's significantly easier to achieve effects on the frontend with Javascript compared to languages, whether it is dynamic rendering or asset bundling.

Typescript further enhances Javascript by providing type safety in an incremental fashion. It also has a much more robust ecosystem compared to other dialects that attempts to make Javascript safer like Clojure or Coffeescript.

## Backend: Go

There are more options for backend development. While scripting languages like Ruby, Python, and Javascript offer quick ways get off the ground, their lack of type safety and performance quickly adds up in maintenance overhead. Many organization that started off with one of those scripting languages either end up migrating to a compiled language, or bootstrapping Herculean efforts make the language safer. Much more rarely does one hear about a migration from a compiled language to an interpreted one.

In the myriad of compiled languages, there are many options like Java, C, Rust, Go, and their respective variants. Despite these numerous options, compiled languages historically has not been favored for new projects due to their slow iteration speed: the requirement to recompile between change means iteration cycles can last many minutes vs. just a few seconds for scripting languages. Go attempts to address this by making compilation speed a top priority with a simplified instruction set (it is rumored that the authors designed the language while waiting for C++ to compile at Google), allowing it to have iteration speed comparable to scripting languages, while retaining the performance of compiled languages. This appears to be a worthy trade-off, as we see more large projects like Kubernetes adopt Go as their main language.

Also I just like Go.

## RPC: Protobuf + gRPC

TODO

## Web: Next.js

TODO

## Database: PostgreSQL?

TODO

## Layer 7 Load Balancing: Envoy

TODO

## Build System: Bazel
