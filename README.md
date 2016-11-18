[![Stories in Ready](https://badge.waffle.io/Recvi/Recvi.github.io.png?label=ready&title=Ready)](http://waffle.io/Recvi/Recvi.github.io)

# Charalampos Thomas - Personal website
This is my personal website, where I get to showcase some of my projects and show you awesomeness!

Right now the project is just an github page template, but overtime a full-featured site will be created.

## Some information about this repo's setup
I'm using [Waffle.io](https://waffle.io) to manage this project's workflow. I wanted a kanban-board-like webapp
where I wouldn't have to do all the data entry and basic actions. Waffle is pretty cool in the sense that your issues
are cards in a kanban board and your commits, forks and pull requests are actions that move the cards from one board to
another. If you've never used kanban boards before, they're just boards (lists) of cards (card = stuff to be done) in a sequence
that defines a workflow. Meaning each board is just a status displaying the stage you're at to complete what you're doing.

In my setup I have four boards:
- `Backlog`: Where all the issues are automatically added, also issues created within Waffle are also synced to github.
- `Ready`: Whenever some issue is ready to be worked with, not all issues are worth developing.
- `In Progress`: When I decide I want to work with something, I create a new branch referencing the issue number (ex. #2 ). Waffle then, detects the branch creation and moves the referenced issue card to `In Progress` board.
- `Done`: After developing and testing I issue a Pull Request to merge my branch with master. Using github's [keywords](https://github.com/blog/1506-closing-issues-via-pull-requests) I can close a referenced issue. Upon submiting the Pull Request
Waffle tracks it and connects it with the card that represents the issue. All that's left then is to merge the Pull Request to 
close the issue and Waffle moves the card to Done.

This setup allows me to have a clear a picture of what I'm doing at any point but also makes it really easy to collaborate with anyone.

[![Throughput Graph](https://graphs.waffle.io/Recvi/Recvi.github.io/throughput.svg)](https://waffle.io/Recvi/Recvi.github.io/metrics/throughput) 
