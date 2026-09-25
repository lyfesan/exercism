// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const newWidth = newSize.width < 1 ? 1 : newSize.width > maxWidth ? maxWidth : newSize.width;

    const maxHeight = this.screenSize.height - this.position.y;
    const newHeight = newSize.height < 1 ? 1 : newSize.height > maxHeight ? maxHeight : newSize.height;

    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    
    const newX = newPosition.x < 0 ? 0 : newPosition.x > maxX ? maxX : newPosition.x;
    const newY = newPosition.y < 0 ? 0 : newPosition.y > maxY ? maxY : newPosition.y;

    this.position.move(newX, newY);
  }
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  
  const newPosition = new Position(100, 150);

  programWindow.resize(newSize);
  programWindow.move(newPosition);
  return programWindow;
}
